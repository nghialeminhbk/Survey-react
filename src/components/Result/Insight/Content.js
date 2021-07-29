const InsightContent = () => {
    return ( 
        <section className="content mt-4 container-fluid">
            <table className="table table-borderless">
                <thead className="text-dark text-center">
                    <tr>
                        <th>Views</th>
                        <th>Starts</th>
                        <th>Response</th>
                        <th>Completion rate</th>
                        <th>Average time to complete</th>
                    </tr>
                </thead>
                <tbody className="text-center fs-4">
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0 %</td>
                        <td>0:0</td>
                    </tr>
                </tbody>
            </table>
        </section>
     );
}
 
export default InsightContent;