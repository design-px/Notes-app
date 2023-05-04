const useUniqueId = () => {

  return Date.now() + Math.random().toString(36)
}

export default useUniqueId