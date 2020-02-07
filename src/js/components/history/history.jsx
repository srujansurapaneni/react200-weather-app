import React from "react";

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const { history } = this.props;
    const history = [
      {
        day: "2/7/2020",
        time: "01:57:38",
        name: "New York City"
      }
    ];
    return (
      <div className="col-6">
        <div className="card">
          <div className="card-header bg-info">Search History</div>
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th></th>
                <th style={{ width: 130 }}></th>
              </tr>
            </thead>
            <tbody>
              {history.map((list, i) => (
                <tr key={new Date() + i}>
                  <td> {list.name}</td>
                  <td>
                    {list.day}
                    <br />
                    {list.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
