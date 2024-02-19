import axios from 'axios';
import { create } from 'zustand';

const useProduct = create((set) => ({
  loading: false,
  product: [],
  error: null,

  getProduct: async () => {
    set(() => ({
      loading: true,
    }));
    try {
      const res = await axios.get('http://localhost:3000/product');
      const data = await res.data;
      set(() => ({
        product: data,
      }));
    } catch (err) {
      set(() => ({
        error: err.message,
      }));
    } finally {
      set(() => ({
        loading: false,
      }));
    }
  },


}));

export default useProduct;
