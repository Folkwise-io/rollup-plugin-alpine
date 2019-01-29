import AlpineBuild from './node_modules/alpine/alpine/alpineBuild';

{{~it.project.imports :value}}
{{=value}}
{{~}}

export default AlpineBuild({
  methods: {{=it.project.methods}}
});
