const Areas = (props) => {
    console.log("her ein areas.js =======================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(props);
    return props.group.append("g")
        .selectAll('path')
        .data(props.data.features)
        .enter()
        .append('path')
        .attr('d', props.path)
        .attr('class', props.className);
}

export default Areas;