const useDateAndTime = () => {
  const dateObj = new Date()

  const d = dateObj.toLocaleString([], { dateStyle: "medium" })

  // const t = dateObj.toLocaleString([], { timeStyle: "short" })

  const t = dateObj.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })

  const date = `${d}  [${t}]`

  return date
}

export default useDateAndTime