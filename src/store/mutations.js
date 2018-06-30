export default {
    changeCity (state, city) {//公用数据，传入的数据
        state.city = city
        try {
            localStorage.city = city
        }catch (e) {

        }
        
    }
}