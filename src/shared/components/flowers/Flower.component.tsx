import * as React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { Flower as FlowerModel } from '../../models/Flower';
export class Flowers extends Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = { flowers: [] };
    }

    componentDidMount() {
        axios
            .get('http://emgeles.lt:8000/flower')
            .then(response => response.data)
            .then((res: FlowerModel) => this.setState({ flowers: res }));
    }
    render() {
        const { Column, ColumnGroup } = Table;
        const flowers = this.state.flowers;
        return (
            <Table dataSource={this.state.flowers}>
                <Column title="Title" dataIndex="Title" key="title" />
                <Column title="Price" dataIndex="Price" key="price" />
            </Table>
        );
    }
}
