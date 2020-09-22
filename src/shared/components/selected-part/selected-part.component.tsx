import * as React from 'react';
type Props = {
    selectedPart: string;
};
type State = {
    selectedPart: string;
};
export class SelectedPartComponent extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { selectedPart: '' };
    }
    render() {
        return (
            <div>
                <h3>{this.props.selectedPart}</h3>
            </div>
        );
    }
}
