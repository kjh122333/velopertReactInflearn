import React, { Component } from 'react';

class IterationSample extends Component {
    obj1 = {
        a: 10,
        b: 20
    }
    obj2 = {
        d: 40,
        ...this.obj1,
        e: 50
    }

    f1 = () => {
        return {
            a1: 10,
            a2: 20
        };
    }

   

    state = {
        names: ['a', 'b', 'c', 'd']
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleInsert = () => {
        // names 배열에 값을 추가하고, name 값을 초기화합니다
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }

    handleRemove = (index, id) => {
        // 편의상 name에 대한 레퍼런스를 미리 만듭니다
        const { names } = this.state;
        this.setState({

                names: names.filter((item, i) => i !== index)
            // filter를 통해 index 번째를 제외한 원소만 있는 새 배열 생성
            
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (
                <li
                    key={index}
                    onDoubleClick={() => this.handleRemove(index)}>
                    {name}
                </li>
            )
        );

        return (
            <div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name} />
                <button  onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;
