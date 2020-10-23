const Style:any = {}

Style.selectHeader = `
    w-full
    px-4
    py-2
    text-sm
    text-gray-700
    font-medium
    leading-8
    bg-white
    border
    border-gray-300
    rounded-md
    cursor-pointer
    trasition
    duration-150
    ease-in-out
`

Style.arrowIconContainer = `
    absolute 
    inset-y-0 
    right-0
    pl-4
    pr-4 
    flex 
    items-center
    cursor-pointer
`

Style.arrowIcon = `
    fill-current 
    text-gray-500 
    w-4 
    h-4
`

Style.optionContainer = `
    relative
    md:absolute
    z-50
    w-full
    h-72
    mt-1
    bg-white
    border
    border-gray-200
    rounded-md
    shadow-lg
    outline-none
    origin-top-right
    overflow-auto
`

Style.option = `
    text-gray-700
    text-sm
    px-4
    py-2
    leading-8   
    hover:bg-indigo-500 
    hover:text-white
    cursor-pointer
`

export default Style