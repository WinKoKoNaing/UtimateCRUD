import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`https://ultimatecrud.herokuapp.com/api/dep/`).catch(error=>{
        return {error : error}
    });
    return res.data || [];
  },
  updateDep: async (dep) => {
    let res = await axios.put(`https://ultimatecrud.herokuapp.com/api/dep/`+ dep._id,{...dep});
    console.log(res);
    return res.data || [];
  },
  deleteDep: async (dep) => {
    let res = await axios.delete(`https://ultimatecrud.herokuapp.com/api/dep/`+ dep._id);
    console.log(res);
    return res.data || [];
  },
  postDep: async (dep) => {
    let res = await axios.post(`https://ultimatecrud.herokuapp.com/api/dep/`,{...dep});
    console.log(res);
    return res.data || [];
  },

}