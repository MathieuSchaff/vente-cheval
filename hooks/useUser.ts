// hooks/useUser.ts
import useSWR from 'swr';
import apiClient from '../utils/apiClient';

interface User {
  id: number;
  username: string;
  email: string;
}

export default function useUser() {
  const { data, error, mutate } = useSWR<User>('/api/login', apiClient.get);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
// The User interface defines the structure of a user object, which includes id, username, and email.

// The useUser function uses useSWR to fetch the user data from the /api/user endpoint. 
// The apiClient.get function is passed as the second argument to useSWR to define how to fetch the data using Axios.

// useSWR returns three values: data, error, and mutate.
//     data: The fetched user data, or undefined if the data is not yet available or there's an error.
//     error: An error object if there's an error during the data fetching, or undefined if there's no error.
//     mutate: A function that can be used to manually update the cached data or trigger a revalidation.

// The useUser function returns an object with four properties:
//     user: The fetched user data, or undefined if not available.
//     isLoading: A boolean that indicates if the data is still being fetched. It is true when there's neither data nor an error.
//     isError: The error object if there's an error during data fetching, or undefined if there's no error.
//     mutate: The mutate function from useSWR, which can be used to update the cached data or trigger a revalidation.

// The purpose of the useUser hook is to provide an easy way to manage the authenticated user state throughout
//  your application. By using this hook, you can access the user data, loading state, and error state in any component that needs it. 
// Additionally, you can use the mutate function to update the user data or trigger a revalidation when the authentication state changes 
// (e.g., when a user logs in or logs out).