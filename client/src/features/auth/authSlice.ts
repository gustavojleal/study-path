// features/auth/authSlice.ts
export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (userId: string) => {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
  }
);