const Style: any = {}

Style.headerContainer = `
    flex  
    bg-white 
    border-b  
    border-gray-200  
    fixed 
    top-0 
    inset-x-0 
    z-100 
    h-16 
    items-center 
`

Style.header = `
    w-full 
    max-w-screen-xl 
    relative 
    mx-auto 
    px-6
    md:px-16
    flex
    items-center
    md:justify-evenly
    lg:justify-start
`

Style.logoContainer = `
    lg:w-1/4 
    xl:w-1/5 
    pl-1 
    pr-3
    lg:pr-8
    flex
    items-center
    cursor-pointer
`

Style.logoIcon = `
    text-indigo-700
    text-2xl
`

Style.logoTitle = `
    hidden
    md:block
    font-bold
    text-xl
    pl-2 
    pr-2
`

Style.searchContainer = `
    w-full 
    min-w-0 
    md:w-3/5
    lg:w-2/4
    lg:px-6 
    xl:px-12
`

export default Style;