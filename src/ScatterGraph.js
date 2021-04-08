import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class ScatterGraph extends PureComponent {
    render() {
        const { data } = this.props;
        return (
            <ResponsiveContainer  width="100%" height="100%">
                <ScatterChart
                    margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                    }}>
                    <CartesianGrid/>
                    <XAxis type="category" dataKey="city" name="city" />
                    <YAxis type="number" dataKey="events" name="number of events" />
                    <Tooltip cursor={{ strokeDasharray: '3 3'}} />
                    <Scatter data={data} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>
        )
    }
}

export default ScatterGraph;