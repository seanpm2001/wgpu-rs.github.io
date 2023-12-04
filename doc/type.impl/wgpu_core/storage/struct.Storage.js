(function() {var type_impls = {
"wgpu_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Storage%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/storage.rs.html#36\">source</a><a href=\"#impl-Debug-for-Storage%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"wgpu_core/storage/struct.Storage.html\" title=\"struct wgpu_core::storage::Storage\">Storage</a>&lt;T, I&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"wgpu_core/resource/trait.Resource.html\" title=\"trait wgpu_core::resource::Resource\">Resource</a>&lt;I&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    I: <a class=\"trait\" href=\"wgpu_core/id/trait.TypedId.html\" title=\"trait wgpu_core::id::TypedId\">TypedId</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/storage.rs.html#36\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wgpu_core::binding_model::BindGroupLayouts"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Index%3CI%3E-for-Storage%3CT,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_core/storage.rs.html#47-56\">source</a><a href=\"#impl-Index%3CI%3E-for-Storage%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/index/trait.Index.html\" title=\"trait core::ops::index::Index\">Index</a>&lt;I&gt; for <a class=\"struct\" href=\"wgpu_core/storage/struct.Storage.html\" title=\"struct wgpu_core::storage::Storage\">Storage</a>&lt;T, I&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"wgpu_core/resource/trait.Resource.html\" title=\"trait wgpu_core::resource::Resource\">Resource</a>&lt;I&gt;,\n    I: <a class=\"trait\" href=\"wgpu_core/id/trait.TypedId.html\" title=\"trait wgpu_core::id::TypedId\">TypedId</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/index/trait.Index.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T&gt;</h4></section></summary><div class='docblock'>The returned type after indexing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_core/storage.rs.html#53-55\">source</a><a href=\"#method.index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/index/trait.Index.html#tymethod.index\" class=\"fn\">index</a>(&amp;self, id: I) -&gt; &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Performs the indexing (<code>container[index]</code>) operation. <a href=\"https://doc.rust-lang.org/nightly/core/ops/index/trait.Index.html#tymethod.index\">Read more</a></div></details></div></details>","Index<I>","wgpu_core::binding_model::BindGroupLayouts"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()