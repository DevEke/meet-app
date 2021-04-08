import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class ScatterGraph extends PureComponent {
    render() {
        const { data } = this.props;
        return (
            <ResponsiveContainer  width="100%" height={400}>
                <ScatterChart  height={400}
                    margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: -20
                    }}>
                    <CartesianGrid
                     stroke="#F6F6F6"
                     opacity={.5}/>
                    <XAxis type="category" dataKey="city" name="city" />
                    <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
                    <Tooltip cursor={{ strokeDasharray: '3 3'}} />
                    <Scatter data={data} fill="#E8D190" />
                </ScatterChart>
            </ResponsiveContainer>
        )
    }
}

export default ScatterGraph;