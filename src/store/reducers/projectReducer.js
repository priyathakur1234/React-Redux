const initState = {
  projects: [
    {id: '1', title: 'I am an intern', content: 'blah blah blah'},
    {id: '2', title: 'working at sandconsole', content: 'blah blah blah'},
    {id: '3', title: 'started from june', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
 
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
  }
  return state;
};

 



export default projectReducer;