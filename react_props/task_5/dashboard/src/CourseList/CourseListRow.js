function CourseListRow({isHeader, textFirstCell, textSecondCell}){
        if (isHeader) {
            if (textFirstCell === null){
                return (
                    <tr>
                        <th colSpan = {2}>{textFirstCell}</th>
                    </tr>
                )
            }
            else {
                return (
                    <tr>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </tr>
                )
            }
        }
        else {
            <tr>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </tr>
        }
}

CourseListRow.propTypes = {
    textSecondCell : oneOfType([string, number]),
  };
export default CourseListRow;