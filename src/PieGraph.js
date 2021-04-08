import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const colors = ["#F6F6F6"];



class PieGraph extends PureComponent {
    
    render() {
        const { data } = this.props;
        return (
            <ResponsiveContainer width="100%" height={400}>
                <PieChart height={500}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        paddingAngle={8}
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        innerRadius={80}
                        outerRadius={100}
                        fill="red"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} name={entry.name}/>
                        ))}
                    </Pie>
                    {/* <Legend 
                        layout="vertical"
                        align="right"
                        iconType="line"
                        iconSize={10}/> */}
                </PieChart>
            </ResponsiveContainer>
        )
    }
}

export default PieGraph;