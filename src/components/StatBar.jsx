const MAX_STAT = 160;

const StatBar = ({ label, value, color}) => {
    const width = value / MAX_STAT * 100;

    return (
        <div className = 'stat'>
            <span className = 'stat-label'>{label}</span>
            <div className = 'stat-track'>
                <div className = 'stat-fill'
                style = {{
                    width: width + '%',
                    backgroundColor: color
                }}
                />
            </div>
            <span className = 'stat-value'>{value}</span>
        </div>
    )
};

export default StatBar;