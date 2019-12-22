export function serialize(obj){
  let queryString = "";
  for(let key in obj){
    queryString += `&${key}=${obj[key]}`;
  }
  return queryString;
}

export function mapFields(options) {
  const obj = {};
  for(let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]];
    obj[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      }
    };
  }
  return obj;
}
