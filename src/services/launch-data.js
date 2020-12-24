const axios = require('axios');

export const getLaunchProgrammeData = async (data) => {
    return await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${data.launch_success}&land_success=${data.landing_success}&launch_year=${data.launch_year}`,{params:{}}).then(res => {
        return res.data
    });
};
