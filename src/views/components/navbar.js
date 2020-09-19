let Navbar = {
    render: async () => {
        let view = /*html*/`
        <a href = "/#/interviews">Interviews</a>
        <a href = "/#/interviews/new">New</a>
        `
        return view
    },
    after_render: async () => { }
}

export default Navbar;