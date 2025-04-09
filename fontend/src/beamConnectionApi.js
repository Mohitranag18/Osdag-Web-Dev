// src/api/beamConnectionApi.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/beam-to-beam-connection/';

export const postBeamConnectionData = async (inputData) => {
  try {
    const response = await axios.post(API_URL, inputData);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};
