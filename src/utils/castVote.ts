import { getVoteId } from "./getVoteId";
import { supaClient } from "./supaClient";

export async function castVote({
  postId,
  userId,
  voteType,
  onSuccess = () => {},
}: {
  postId: string;
  userId: string;
  voteType: 'up' | 'down';
  voteId?: Promise<string | undefined>;
  onSuccess?: () => void;
}) {
  const voteId = await getVoteId(userId, postId);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error } = voteId
    ? await supaClient.from('post_votes').update({
        id: voteId,
        post_id: postId,
        user_id: userId,
        vote_type: voteType,
      })
    : await supaClient.from('post_votes').insert({
        post_id: postId,
        user_id: userId,
        vote_type: voteType,
      });
  // handle error
  onSuccess();
}