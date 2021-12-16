makeSomeTables = () => {
  let unique = [];
  let thList = [];
  let counter = 0;
  let result = this.props.obj.data.map((element, index) => {
    let keys = Object.keys(element);
    let tdList = [];
    // keys of keys are 0, 1, 2, 3.... this tells me the amount of properties
    // but that also means i could just access with the index up until
    // that number perhaps

    // just realized unique was printing near infinitely because each iteration
    // i refreshed it to empty, yikes
    // console.log(keys[0]);

    // grab unique elements
    keys.map((ele) => {
      if (!unique.includes(ele)) {
        unique.push(ele);
      }
    });

    // make data consisting of each property
    // map each unique property into an object map containing elements of property unique
    let tdElements = unique.map((ele, index) => {
      tdList.push(<td>{element[ele]}</td>);

      if (counter < unique.length) {
        thList.push(<th>{unique[index]}</th>);
        counter++;
      }
    });

    return (
      <tr>
        <th scope="row">{index + 1}</th>
        {tdList}
        {/* 
          <th scope="row">{index + 1}</th> 
          <td>{element["CRN Number"]}</td>
          <td>{element["Course Days"]}</td>
          <td>{element["Course ID"]}</td>
          <td>{element["Course Time"]}</td>
          <td>{element["Course Title"]}</td>
          <td>{element["Credits"]}</td>
          <td>{element["Dept Name"]}</td>
          <td>{element["Instructor"]}</td>
          <td>{element["Room"]}</td>
          <td>{element["Semester"]}</td>
*/}
      </tr>
    );
  });

  let ele_ = (
    <table className="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          {thList}
        </tr>
      </thead>
      <tbody>{result}</tbody>
    </table>
  );
  ReactDOM.render(<div>{ele_}</div>, document.getElementById("test2"));
  console.log(unique);
  // ReactDOM.render(<div>{result}</div>, document.getElementById("test2"));
};

module.exports = makeSomeTables;
