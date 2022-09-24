import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '42704cb5cdmsh1202a473e5f41dcp1a94c3jsnc85bb0230651' ,
//	  'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
    },
  });
    
  return data;
}


//headers: {
//    'X-RapidAPI-Key': '42704cb5cdmsh1202a473e5f41dcp1a94c3jsnc85bb0230651',
//    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//  }

