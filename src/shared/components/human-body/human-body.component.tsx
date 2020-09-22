import * as React from 'react';
import { Component } from 'react';
import { SelectedPartComponent } from '../selected-part/selected-part.component';
import HumanBodyPartsComponent from '../human-body-parts/human-body-parts.component';
import { Card } from 'antd';
import './human-body.style.scss';
import { SelectExerciseComponent } from '../select-exercise/select-exercise.component';

type State = {
    selectedPiece: any;
};
type Props = {};
export class HumanBodyComponent extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { selectedPiece: 'none' };
    }
    selectedPieceString: string = 'none';
    componentDidMount() {}
    selectedPiece = () => {
        const pieces = document.getElementsByTagName('svg');

        for (let i = 0; i < pieces.length; i++) {
            pieces[i].onclick = e => {
                e.preventDefault();
                if (e.currentTarget === pieces[i] && pieces[i].attributes.getNamedItem('data-position')?.value.toString() !== undefined) {
                    this.setState({ selectedPiece: pieces[i].attributes.getNamedItem('data-position')?.value.toString() });
                }
            };
        }
    };
    render() {
        return (
            <div className="grid">
                <Card>
                    <SelectedPartComponent selectedPart={this.state.selectedPiece} />
                    <SelectExerciseComponent selectedPart={this.state.selectedPiece} />
                </Card>
                <div onClick={this.selectedPiece}>
                    <HumanBodyPartsComponent />
                </div>
            </div>
        );
    }
}
