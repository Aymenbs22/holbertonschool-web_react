function CourseListRow({isHeader, textFirstCell, textSecondCell}){
        if (isHeader) {
            if (textFirstCell === null){
                return (
                    <tr style={{ backgroundColor: '#f5f5f5ab' }}>
                        <th colSpan = {2} style={{ backgroundColor: '#deb5b545' }}>{textFirstCell}</th>
                    </tr>
                )
            }
            else {
                return (
                    <tr style={{ backgroundColor: '#f5f5f5ab' }}>
                        <th style={{ backgroundColor: '#deb5b545' }}>{textFirstCell}</th>
                        <th style={{ backgroundColor: '#deb5b545' }}>{textSecondCell}</th>
                    </tr>
                )
            }
        }
        else {
            <tr style={{ backgroundColor: '#f5f5f5ab' }}>
                <th style={{ backgroundColor: '#deb5b545' }}>{textFirstCell}</th>
                <th style={{ backgroundColor: '#deb5b545' }}>{textSecondCell}</th>
            </tr>
        }
}

CourseListRow.propTypes = {
    textSecondCell : oneOfType([string, number]),
  };
export default CourseListRow;