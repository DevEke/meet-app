import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const colors = ["yellow", "green", "orange", "purple"];

const radian = Math.PI / 180
const customLabels = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * radian);
    const y = cy + radius * Math.sin(-midAngle * radian);

    return (
        <text
            x={x}
            y={y}
            fill="blue"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

class PieGraph extends PureComponent {
    
    render() {
        const { data } = this.props;
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={customLabels}
                        outerRadius={80}
                        fill="red"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} name={entry.name}/>
                        ))}
                    </Pie>
                    <Legend verticalAlign="top" iconType="line"/>
                </PieChart>
            </ResponsiveContainer>
        )
    }
}

export default PieGraph;