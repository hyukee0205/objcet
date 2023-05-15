import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {useAuthContext} from '../context/AuthContext';
import { addToNotice, getNotice, removeFromNotice, updateToNotice } from '../api/firebase';

export default function useNotice() {
  const {uid, displayName} = useAuthContext();
  const queryClient = useQueryClient();

  const noticeQuery = useQuery(['notice'], getNotice, {
    staleTime: 1000 * 60,
  });

  const addNotice = useMutation(
    (notice) => addToNotice(notice, uid, displayName), {
      onSuccess: () => queryClient.invalidateQueries(['notice']),
    }
  );

  const updateNotice = useMutation(
    (notice) => updateToNotice(notice), {
      onSuccess: () => queryClient.invalidateQueries(['notice']),
    }
  );

  const removeNotice = useMutation((id) => removeFromNotice(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['notice']);
    },
  });


  return (
    {noticeQuery, addNotice, removeNotice, updateNotice}
  );
}

