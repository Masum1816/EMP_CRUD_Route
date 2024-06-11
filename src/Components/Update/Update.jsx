import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router';
import { Data } from '../../helper';
import { setData } from '../../setData';

const UpdateData = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const [tableData, setTableData] = useState(Data("MyData"));

  const [inputData, setInputData] = useState({
    id:'',
    name: '',
    age: '',
    department: '',
    position: '',
    salary: '',
    email:''
  });


  const handleInput = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setInputData({ ...inputData, [name]: value });

  };

  const handleSubmit = (event) =>{
    
    event.preventDefault();
    setTableData((prevData) =>
      prevData.map((record) =>{
        if(record.id === id){
          return {...record, ...inputData}
        }else{
          return record
        }
      }
        // record.id === id ? { ...record, ...inputData } : record
      )
    );
    setIsSubmit(true);
  };

  useEffect(() => {

    const record = tableData.find((data) => data.id === id);

    if (record) {
      setInputData(record);
    }

  }, [tableData, id]);

  useEffect(() => {
    if (isSubmit) {
      setData("MyData", tableData);
    }
  }, [isSubmit, navigate, tableData]);
  
  useEffect(() => {
    if(isSubmit){
      navigate('/Table');
    }
  }, [isSubmit, navigate]);

  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className='mb-4 text-center font mt-4'>Update Data</h1>
          <div className="card p-5 bg-dark-subtle">

          <Form onSubmit={handleSubmit}>
            <Form.Control type="text" name='id' value={inputData.id} onChange={handleInput} hidden/>
            <Form.Group controlId="fname" className='mt-3'>
              <div className="d-flex">
                <Form.Label className='mt-1 fname font fs-4'>EmpName </Form.Label>
                <Form.Control type="text" className='w-100 ms-3' name='name' value={inputData.name} onChange={handleInput}/>
              </div>
            </Form.Group>
            <Form.Group className="w-100 mt-3" controlId="lname">
              <div className="d-flex">
                <Form.Label className='mt-1 fname font fs-4'>EmpAge </Form.Label>
                <Form.Control type="text" className='w-100 ms-3' name='age' value={inputData.age} onChange={handleInput}/>
              </div>
            </Form.Group>
            <Form.Group className="w-100 mt-3" controlId="mail">
              <div className="d-flex">
                <Form.Label className='mt-1 mail font fs-4'>EmpDepartement </Form.Label>
                <Form.Control type="mail" className='w-100 ms-4 ms-3' name='department' value={inputData.department} onChange={handleInput}/>
              </div>
            </Form.Group>
            <Form.Group className="w-100 mt-3" controlId="category">
              <div className="d-flex">
                <Form.Label className='mt-1 category font fs-4'>EmpPosition </Form.Label>
                <Form.Control type="text" className='w-100 ms-3' name='position' value={inputData.position} onChange={handleInput}/>
              </div>
            </Form.Group>
            <Form.Group className="w-100 mt-3" controlId="contact">
              <div className="d-flex">
                <Form.Label className='mt-1 contact font fs-4'>EmpEmail </Form.Label>
                <Form.Control type="mail" className='w-100 ms-3' name='email' value={inputData.email} onChange={handleInput}/>
              </div>
            </Form.Group>
            <Form.Group className="w-100 mt-3" controlId="contact">
              <div className="d-flex">
                <Form.Label className='mt-1 contact font fs-4'>EmpSalary </Form.Label>
                <Form.Control type="number" className='w-100 ms-3' name='salary' value={inputData.salary} onChange={handleInput}/>
              </div>
            </Form.Group>
            <div className="submit">
              <Button type="submit" className='bg-danger mt-5 submitButton'>Submit</Button>
            </div>
          </Form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UpdateData;
