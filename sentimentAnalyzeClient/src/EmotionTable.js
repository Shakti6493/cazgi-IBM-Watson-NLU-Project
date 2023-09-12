import React from 'react';
import './bootstrap.min.css';



class EmotionTable extends React.Component {
    render() {
        // Assuming this.props.emotions is an object
        const emotions = this.props.emotions;

        return (  
            <div>
                <table className="table table-bordered">
                    <tbody>
                        {Object.entries(emotions).map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmotionTable;
