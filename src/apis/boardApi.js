import axios from 'axios'

export const getBoard = async () => {
    try {
        //응답 성공
        const response = await axios.get('http://localhost:5000/board/list');
        console.log(response);
    } catch (error) {
        //응답 실패
        console.error(error);
    }
}
