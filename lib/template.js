import AlpineLibrary from './node_modules/alpine/alpine/alpineLibrary';

{{~it.project.imports :value}}
{{=value}}
{{~}}

export default AlpineLibrary({
  methods: {{=it.project.methods}}
});
