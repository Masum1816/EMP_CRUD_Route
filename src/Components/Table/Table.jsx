import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';
import { Data } from '../../helper';
import Button from 'react-bootstrap/Button';
import { setData } from '../../setData';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const TableData = () => {

  const navigate = useNavigate();
  const [tableData, setTableData] = useState(Data("MyData"));
  const [search, setSearch] = useState("");

  const handleEdit = (id) => {
    navigate(`/Update/${id}`);
  };

  const handleDelete = (id) => {

    const updatedData = tableData.filter((data) => data.id !== id);
    setTableData(updatedData);
    setData("MyData", updatedData);
    
  };

  const handleSearch = (event) => {

    setSearch(event.target.value);
    let data = Data("MyData");
    
    const searchData = data.filter((rec) => 
      rec.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    
    setTableData(searchData);
    
  }
  
  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    let data = Data("MyData");
    console.log("Data : ", data);
    
    const searchData = data.filter((rec) => 
      rec.name.toLowerCase().includes(search.toLowerCase())
    )
    
    console.log("SearchData : ", searchData);
    setTableData(searchData);

    
    
    console.log(TableData);
  }

  const handleSort = (key, type) => {

    let sortedData;

    switch(type){

      case "aes":
        sortedData = [...tableData].sort((first, second) => 
            first[key].localeCompare(second[key])
        );
        break;

      case "des":
        sortedData = [...tableData].sort((first, second) => 
            second[key].localeCompare(first[key])
        );
        break;

      }
      setTableData(sortedData);

  }

  // const handleCategory = (category) => {

  //   setSelectCategory[category];

  // }

  // const categories = Array.from(new Set(tableData.map(data => data.category)));

  useEffect(() => {
    setTableData(Data("MyData"));
  }, []);

  return (
    <>

    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="d-flex">
            <Form.Control type="text" placeholder='Search' value={search} onChange={handleSearch}/>
          </div>
        </Form.Group>
      <Button variant="primary" type="submit" className='color'>Submit</Button>
    </Form>

    {/* <Dropdown onClick={handleCategory}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>

        {
          categories.map((category, index) => {
            <Dropdown.Item key={index} href="#/action">{
              {category}
            }</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown> */}
    
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1>Table</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                  {/* <Button onClick={() => handleSort("id", "aes")}>L-H</Button>
                  <Button onClick={() => handleSort("id", "des")}>H-L</Button> */}
                    <Button onClick={() => handleSort("id", "aes")}>
                      <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                    empId
                    <Button onClick={() => handleSort("id", "des")}>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </Button>
                  </th>
                  <th>
                    <Button onClick={() => handleSort("name", "aes")}>
                      <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                    empName
                    <Button onClick={() => handleSort("name", "des")}>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </Button>
                  </th>
                  <th>
                    <Button onClick={() => handleSort("age", "aes")}>
                      <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                    empAge
                    <Button onClick={() => handleSort("age", "des")}>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </Button>
                  </th>
                  <th>
                    <Button onClick={() => handleSort("departement", "aes")}>
                      <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                    empDepartement
                    <Button onClick={() => handleSort("empDepartement", "des")}>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </Button>
                  </th>
                  <th>
                    <Button onClick={() => handleSort("position", "aes")}>
                      <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                    empPosition
                    <Button onClick={() => handleSort("position", "des")}>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </Button>
                  </th>
                  <th>
                    <Button onClick={() => handleSort("email", "aes")}>
                      <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                    empEmail
                    <Button onClick={() => handleSort("email", "des")}>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </Button>
                  </th>
                  <th>
                    <Button onClick={() => handleSort("salary", "aes")}>
                      <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                    empSalary
                    <Button onClick={() => handleSort("salary", "des")}>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </Button>
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.departement}</td>
                    <td>{data.position}</td>
                    <td>{data.email}</td>
                    <td>{data.salary}</td>
                    <td>
                      <Button variant="primary" className='ms-1' onClick={() => handleEdit(data.id)}>Edit</Button>
                      <Button variant="danger" className='ms-1' onClick={() => handleDelete(data.id)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;
