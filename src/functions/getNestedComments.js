const getNestedComments =(id,comments)=>{
    return comments.filter((comment) => comment.parentId === id)
    .sort((a, b) => new Date(a).getTime - new Date(b).getTime);
}
export default getNestedComments;