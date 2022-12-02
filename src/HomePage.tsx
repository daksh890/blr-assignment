import React, { FunctionComponent ,  useEffect, useState } from 'react'
import CradComponent from './CradComponent';
import axios from "axios"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './Homepage.css';


interface HomeProps {

}

const HomePage: FunctionComponent<HomeProps> = () => {
   const [data, setData] = useState([]);
   const [count, setCount] = useState(0);

   const getData =async (params:null) => {
       if(localStorage.getItem("data") == null){
        const res = await axios.get("https://randomuser.me/api/?results=50");
        localStorage.setItem("data", JSON.stringify(res.data.results));
       }
       getStore();
       
   }
   const getStore = () =>{
        var res="";
        res += localStorage.getItem("data");
        const items = JSON.parse(res);
        if(items!=null){
            setData(items);
            setCount(items.length);
        }
        // console.log("rerender");
   }

   const refresh = ()=>{
    localStorage.clear();
    getData(null);
   }

   useEffect(() => {
    // console.log("first");
     getData(null);
   }, [])


    return (
        <div>
            <div className="container">
                <div className="header">
                    <h2 className="text">No of Cards: <span className="count">{count}</span></h2>
                    <Button onClick={refresh} variant="contained" sx={{backgroundColor:'black', text:'white'}}>Refresh</Button>
                </div>
                <div className="list">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                        { data && data.map((user, key) => (
                            <Grid key={key} item xs={4}>
                                <CradComponent user={user} data={data} index={key} onDel={getStore}/>
                            </Grid>
                        ))}
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default HomePage
