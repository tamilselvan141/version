let data = [{
    version: "2.1",
    relesed_date: "February 2, 2020",
    bugs: ["Fixes issue"],
    features_included: ["67A", "87Z"],
    author: ["Apple", "Vivo"],
    version_type: "patch"
},
{
    version: "4.1",
    relesed_date: "November 22, 2020",
    bugs: ["performance"],
    features_included: ["67A", "76K"],
    author: ["Oppo", "Samsung"],
    version_type: "Enhancement"
},
{
    version: "5.1.1",
    relesed_date: "May 7, 2012",
    bugs: ["Fixes battery drain bug."],
    features_included: ["91A", "55B"],
    author: ["Apple", "Samsung"],
    version_type: "patch"
},
{
    version: "6.1.6",
    relesed_date: "February 21, 2014",
    bugs: ["audio profile for speakerphone"],
    features_included: ["56A", "34A"],
    author: ["Apple", "Xiomi"],
    version_type: "major"
},
{
    version: "7.1.2",
    relesed_date: "June 30, 2014",
    bugs: ["Stability"],
    features_included: ["45G", "45J"],
    author: ["Xiomi"],
    version_type: "patch"
}
]

function findByReleaseYear(year:any ) {
    
    let filteredYear = data.filter(n => n.relesed_date.includes(year))
    console.log(`${filteredYear.length} versions were released in Year ${year}`)
    console.log(filteredYear)
    console.log("---------------------------------------------------------------------------")
}
function findByBug(string :any ) {
    console.log("---------------------------------------------------------------------------")
    let bug = data.filter(n => n.bugs.includes(string))
    console.log(`${bug.length} version have ${string} Bug...`)
    console.log(bug)
    console.log(bug.length, "Bugs")
    console.log("---------------------------------------------------------------------------")
}
function findByType(type:any) {
    console.log("---------------------------------------------------------------------------")
    let findType = data.filter(n => n.version_type.includes(type))
    console.log(`${findType.length} versions have ${type} type...`)
    console.log(findType)
    console.log("---------------------------------------------------------------------------")
}
function findByFeature(string:any) {
    console.log("---------------------------------------------------------------------------")
    let feature = data.filter(n => n.features_included.includes(string))
    console.log(`${feature.length} versions have ${string} Feature...`)
    console.log(feature)
    console.log("---------------------------------------------------------------------------")
}
function findByAuthor(name:any) {
    console.log("---------------------------------------------------------------------------")
    let authorName = data.filter(n => n.author.includes(name))
    console.log(`${authorName.length} version developed by ${name}...`)
    console.log(authorName)
    console.log("---------------------------------------------------------------------------")
}
function findByVersion(ver : any) {
    console.log("---------------------------------------------------------------------------")
    let version = data.filter(n => n.version == ver)
    console.log(version)
    console.log("---------------------------------------------------------------------------")
}
findByType("patch")
findByBug("Stability")
findByReleaseYear(2020)
findByFeature("67A")
findByAuthor("Apple")
findByVersion("5.1.1")