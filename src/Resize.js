import React, { Component } from 'react';

class Resize extends Component {
    eventHandler = null
  
    constructor (props) {
      super(props)
      
      this.state = {
        isDragging: false,
        total_panels: this.props.total,
        panels: []
      }
    }
  
    componentDidMount () {
      document.addEventListener('mousemove', this.resizePanel)
      document.addEventListener('mouseup', this.stopResize)
      document.addEventListener('mouseleave', this.stopResize)
    }

    componentDidUpdate (prevProps) {
        if (prevProps.total !== this.props.total){
            this.widthCalc(this.props.total)
        }

        if (prevProps.max !== this.props.max){
            this.maxCalc(this.props.max, this.props.total)
        }
    }

    startResize = (e, index) => {
      this.setState({
        isDragging: true,
        currentPanel: index,
        adjacentPanel: index - 1,
        initialPos: e.clientX
      })

    }
    
    stopResize = () => {
      if (this.state.isDragging) {

        this.setState({
          isDragging: false,
          delta: 0,
          previous_delta: 0,
          currentPanel: null
        })

      }
    }
    
    resizePanel = (event) => {

      if (this.state.isDragging) {

        const {adjacentPanel, currentPanel, previous_delta, panels, initialPos} = this.state;
        
        let temp = panels;

        let temp_0 = temp[currentPanel]
        let temp_1 = temp[adjacentPanel]

        let delta = event.clientX - initialPos, current, adjacent

        let previous = previous_delta ? previous_delta : delta

        // if column is extending right columns (when delta is positive)
        if ( delta > 0 ) {

            if (temp_0 <= 0) {

                temp_0 = 0

                if (temp.length > currentPanel + 1) {

                    if (currentPanel !== temp.length - 1) {

                        current = currentPanel+1

                        // this.setState((prevState) => ({
                        //     currentPanel: prevState.currentPanel++
                        // }))

                        this.setState({
                            currentPanel: current
                        })
                    } 

                    

                } else {
                    temp_1 += temp_0
                }

            } else {
                temp_1 += (delta - previous)
                temp_0 -= (delta - previous);
            }
           
        } else if ( delta < 0 ) {

            if (temp_1 <= 0) {

                temp_1 = 0

                if (currentPanel - 1 !== 0) {

                    if (adjacentPanel !== 0) {

                        adjacent = adjacentPanel-1;

                        // this.setState((prevState) => ({
                        //     adjacentPanel: prevState.adjacentPanel--
                        // }))

                        this.setState({
                            adjacentPanel: adjacent
                        })
                    }


                }
                else {
                    temp_0 += temp_1
                    console.log("EXCEEEDING hihi");
                }

            } else {

                temp_1 += (delta - previous)
                temp_0 -= (delta - previous);
            }
           
        }

        temp.splice(currentPanel, 1, temp_0)
        temp.splice(adjacentPanel, 1, temp_1)

        console.log("panels", temp);

        this.setState({
          panels: temp,
          previous_delta: delta
        })

      }

    }

    widthCalc = (number) => {

        let temp = [], num = (window.innerWidth - ((number - 1) * 10)) / number  // 10 is order plus resizer width

        for (let i = 0; i < number; i++) {
            temp.push(num)            
        }
        
        this.setState({ panels: temp })
    }

    maxCalc = (index, number) => {

        let temp = [], num = (number - 1) * 8;

        for (let i = 0; i < number; i++) {

            if (i !== index) {
                temp.push(0)
            } else {
                temp.push(window.innerWidth - num)
            }
                        
        }
        
        this.setState({ panels: temp })
    }
    
    render() {

      const { panels } = this.state;

      const rest = this.props.children;

      return (
        <div className="panel-container" onMouseUp={() => this.stopResize()}>
         
          {[].concat(...rest.map((child, i) => {
              if ( i === 0 ) {
                  return [
                    <div key={"panel_" + i} className="panel" style={{minWidth: panels[i] + "px"}}>
                        {child}
                    </div>
                  ]
              } else {
                return [
                    <div onMouseDown={(e) => this.startResize(e, i)}
                        key={"resizer_" + i}
                        className="resizer">
                    </div>,
                    <div key={"panel_" + i} className="panel" style={{minWidth: panels[i] + "px"}}>
                        {child}
                    </div>
                  ]
              }
            
          }))}
        </div>
      )
    }
}
  

export default Resize;