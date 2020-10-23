const Style: any = {}

Style.container = `
    mx-auto
    px-6
    md:px-16
    pt-20
`

Style.filter = `
    w-full 
    text-base
    flex
    items-center
    justify-end
    pb-2
    md:hidden
`
Style.filterLabelAndIcon = (isFilterVisible) => `
    ${isFilterVisible ? 'text-indigo-700' : 'text-gray-700'}   
    lg:hover:text-indigo-700 
`
Style.filterSection = `
    hidden
    md:flex
    md:justify-end
`

export default Style