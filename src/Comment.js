import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) => 
	<li>
		{text} 
			<span> votes: {votes} </span>
			<button onClick={() => thumbUpComment(id)}>Łapka w górę</button>
			<button onClick={() => thumbDownComment(id)}>Łapka w dół</button>		
	</li>;

export default Comment;