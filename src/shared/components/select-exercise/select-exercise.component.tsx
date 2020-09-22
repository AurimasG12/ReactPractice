import * as React from 'react';
import { Component } from 'react';
import { Select } from 'antd';
import { InputNumber } from 'antd';
import { Button } from 'antd';
import './select-exercise.style.scss';
const { Option } = Select;
type Props = {
    selectedPart: string;
};
type State = { selectedPart: string; exercises: any };
export class SelectExerciseComponent extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { selectedPart: this.props.selectedPart, exercises: [] };
    }
    cycles: number = 0;
    repeats: number = 0;
    exerciseList = [
        { id: 1, name: 'Rovimas', group: 'chest' },
        { id: 3, name: 'pritupimai', group: 'leg' },
        { id: 4, name: 'itupstai', group: 'leg' },
    ];
    selectOptions = [] as any;
    componentDidMount() {}
    updateState = () => {
        this.selectOptions = this.state.exercises;
        this.selectOptions = [];
        for (var i = 0; i < this.exerciseList.length; i++) {
            if (this.exerciseList[i].group === this.props.selectedPart) {
                this.selectOptions.push(
                    <Option key={this.exerciseList[i].id} value={this.exerciseList[i].name}>
                        {this.exerciseList[i].name}
                    </Option>,
                );
            }
        }

        return this.selectOptions;
    };
    setCycles = (value: number) => {
        this.cycles = value;
    };
    setReps = (value: number) => {
        this.repeats = value;
    };
    render() {
        return (
            <div className="selector">
                <Select placeholder="select exercise">{this.updateState()}</Select>
                <div className="input">
                    <p>Input cycles</p>
                    <InputNumber onChange={e => this.setCycles(Number(e))} />
                </div>
                <div className="input">
                    <p>Input reps</p>
                    <InputNumber onChange={e => this.setReps(Number(e))} />
                </div>

                <Button type="primary">Add Exercise to list</Button>
            </div>
        );
    }
}
