(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;'de, A&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayString.html\" title=\"struct arrayvec::ArrayString\">ArrayString</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>","synthetic":false,"types":["arrayvec::array_string::ArrayString"]},{"text":"impl&lt;'de, T:&nbsp;<a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;, A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&lt;Item = T&gt;&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["arrayvec::ArrayVec"]}];
implementors["ron"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"ron/value/enum.Value.html\" title=\"enum ron::value::Value\">Value</a>","synthetic":false,"types":["ron::value::Value"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"ron/ser/struct.PrettyConfig.html\" title=\"struct ron::ser::PrettyConfig\">PrettyConfig</a>","synthetic":false,"types":["ron::ser::PrettyConfig"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"ron/value/struct.Map.html\" title=\"struct ron::value::Map\">Map</a>","synthetic":false,"types":["ron::value::Map"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"ron/extensions/struct.Extensions.html\" title=\"struct ron::extensions::Extensions\">Extensions</a>","synthetic":false,"types":["ron::extensions::Extensions"]}];
implementors["wgpu"] = [{"text":"impl&lt;'de, V&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu/enum.LoadOp.html\" title=\"enum wgpu::LoadOp\">LoadOp</a>&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu::LoadOp"]},{"text":"impl&lt;'de, V&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu/struct.Operations.html\" title=\"struct wgpu::Operations\">Operations</a>&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu::Operations"]}];
implementors["wgpu_core"] = [{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/binding_model/struct.BindGroupEntry.html\" title=\"struct wgpu_core::binding_model::BindGroupEntry\">BindGroupEntry</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::binding_model::BindGroupEntry"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/binding_model/struct.BindGroupDescriptor.html\" title=\"struct wgpu_core::binding_model::BindGroupDescriptor\">BindGroupDescriptor</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::binding_model::BindGroupDescriptor"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/binding_model/struct.BindGroupLayoutDescriptor.html\" title=\"struct wgpu_core::binding_model::BindGroupLayoutDescriptor\">BindGroupLayoutDescriptor</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::binding_model::BindGroupLayoutDescriptor"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/binding_model/struct.PipelineLayoutDescriptor.html\" title=\"struct wgpu_core::binding_model::PipelineLayoutDescriptor\">PipelineLayoutDescriptor</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::binding_model::PipelineLayoutDescriptor"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/binding_model/struct.BufferBinding.html\" title=\"struct wgpu_core::binding_model::BufferBinding\">BufferBinding</a>","synthetic":false,"types":["wgpu_core::binding_model::BufferBinding"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_core/binding_model/enum.BindingResource.html\" title=\"enum wgpu_core::binding_model::BindingResource\">BindingResource</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::binding_model::BindingResource"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/command/struct.RenderBundleEncoderDescriptor.html\" title=\"struct wgpu_core::command::RenderBundleEncoderDescriptor\">RenderBundleEncoderDescriptor</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::command::bundle::RenderBundleEncoderDescriptor"]},{"text":"impl&lt;'de, T&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/command/struct.Rect.html\" title=\"struct wgpu_core::command::Rect\">Rect</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_core::command::draw::Rect"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_core/command/enum.LoadOp.html\" title=\"enum wgpu_core::command::LoadOp\">LoadOp</a>","synthetic":false,"types":["wgpu_core::command::render::LoadOp"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_core/command/enum.StoreOp.html\" title=\"enum wgpu_core::command::StoreOp\">StoreOp</a>","synthetic":false,"types":["wgpu_core::command::render::StoreOp"]},{"text":"impl&lt;'de, V&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/command/struct.PassChannel.html\" title=\"struct wgpu_core::command::PassChannel\">PassChannel</a>&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_core::command::render::PassChannel"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/command/struct.RenderPassColorAttachment.html\" title=\"struct wgpu_core::command::RenderPassColorAttachment\">RenderPassColorAttachment</a>","synthetic":false,"types":["wgpu_core::command::render::RenderPassColorAttachment"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/command/struct.RenderPassDepthStencilAttachment.html\" title=\"struct wgpu_core::command::RenderPassDepthStencilAttachment\">RenderPassDepthStencilAttachment</a>","synthetic":false,"types":["wgpu_core::command::render::RenderPassDepthStencilAttachment"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_core/device/trace/enum.Action.html\" title=\"enum wgpu_core::device::trace::Action\">Action</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::device::trace::Action"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_core/device/trace/enum.Command.html\" title=\"enum wgpu_core::device::trace::Command\">Command</a>","synthetic":false,"types":["wgpu_core::device::trace::Command"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_core/device/enum.HostMap.html\" title=\"enum wgpu_core::device::HostMap\">HostMap</a>","synthetic":false,"types":["wgpu_core::device::HostMap"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/device/struct.ImplicitPipelineContext.html\" title=\"struct wgpu_core::device::ImplicitPipelineContext\">ImplicitPipelineContext</a>","synthetic":false,"types":["wgpu_core::device::ImplicitPipelineContext"]},{"text":"impl&lt;'de, T&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/id/struct.Id.html\" title=\"struct wgpu_core::id::Id\">Id</a>&lt;T&gt;","synthetic":false,"types":["wgpu_core::id::Id"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/pipeline/struct.ShaderModuleDescriptor.html\" title=\"struct wgpu_core::pipeline::ShaderModuleDescriptor\">ShaderModuleDescriptor</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::pipeline::ShaderModuleDescriptor"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/pipeline/struct.ProgrammableStageDescriptor.html\" title=\"struct wgpu_core::pipeline::ProgrammableStageDescriptor\">ProgrammableStageDescriptor</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::pipeline::ProgrammableStageDescriptor"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/pipeline/struct.ComputePipelineDescriptor.html\" title=\"struct wgpu_core::pipeline::ComputePipelineDescriptor\">ComputePipelineDescriptor</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::pipeline::ComputePipelineDescriptor"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/pipeline/struct.VertexBufferLayout.html\" title=\"struct wgpu_core::pipeline::VertexBufferLayout\">VertexBufferLayout</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::pipeline::VertexBufferLayout"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/pipeline/struct.VertexState.html\" title=\"struct wgpu_core::pipeline::VertexState\">VertexState</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::pipeline::VertexState"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/pipeline/struct.FragmentState.html\" title=\"struct wgpu_core::pipeline::FragmentState\">FragmentState</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::pipeline::FragmentState"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/pipeline/struct.RenderPipelineDescriptor.html\" title=\"struct wgpu_core::pipeline::RenderPipelineDescriptor\">RenderPipelineDescriptor</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::pipeline::RenderPipelineDescriptor"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/resource/struct.TextureViewDescriptor.html\" title=\"struct wgpu_core::resource::TextureViewDescriptor\">TextureViewDescriptor</a>&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"wgpu_core/resource/struct.TextureViewDescriptor.html\" title=\"struct wgpu_core::resource::TextureViewDescriptor\">TextureViewDescriptor</a>&lt;'a&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["wgpu_core::resource::TextureViewDescriptor"]},{"text":"impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_core/resource/struct.SamplerDescriptor.html\" title=\"struct wgpu_core::resource::SamplerDescriptor\">SamplerDescriptor</a>&lt;'a&gt;","synthetic":false,"types":["wgpu_core::resource::SamplerDescriptor"]}];
implementors["wgpu_types"] = [{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.Backend.html\" title=\"enum wgpu_types::Backend\">Backend</a>","synthetic":false,"types":["wgpu_types::Backend"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.PowerPreference.html\" title=\"enum wgpu_types::PowerPreference\">PowerPreference</a>","synthetic":false,"types":["wgpu_types::PowerPreference"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.BackendBit.html\" title=\"struct wgpu_types::BackendBit\">BackendBit</a>","synthetic":false,"types":["wgpu_types::BackendBit"]},{"text":"impl&lt;'de, S&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.RequestAdapterOptions.html\" title=\"struct wgpu_types::RequestAdapterOptions\">RequestAdapterOptions</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_types::RequestAdapterOptions"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.Features.html\" title=\"struct wgpu_types::Features\">Features</a>","synthetic":false,"types":["wgpu_types::Features"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.Limits.html\" title=\"struct wgpu_types::Limits\">Limits</a>","synthetic":false,"types":["wgpu_types::Limits"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.DeviceType.html\" title=\"enum wgpu_types::DeviceType\">DeviceType</a>","synthetic":false,"types":["wgpu_types::DeviceType"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.AdapterInfo.html\" title=\"struct wgpu_types::AdapterInfo\">AdapterInfo</a>","synthetic":false,"types":["wgpu_types::AdapterInfo"]},{"text":"impl&lt;'de, L&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.DeviceDescriptor.html\" title=\"struct wgpu_types::DeviceDescriptor\">DeviceDescriptor</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_types::DeviceDescriptor"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.ShaderStage.html\" title=\"struct wgpu_types::ShaderStage\">ShaderStage</a>","synthetic":false,"types":["wgpu_types::ShaderStage"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.ShaderFlags.html\" title=\"struct wgpu_types::ShaderFlags\">ShaderFlags</a>","synthetic":false,"types":["wgpu_types::ShaderFlags"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.TextureViewDimension.html\" title=\"enum wgpu_types::TextureViewDimension\">TextureViewDimension</a>","synthetic":false,"types":["wgpu_types::TextureViewDimension"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.BlendFactor.html\" title=\"enum wgpu_types::BlendFactor\">BlendFactor</a>","synthetic":false,"types":["wgpu_types::BlendFactor"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.BlendOperation.html\" title=\"enum wgpu_types::BlendOperation\">BlendOperation</a>","synthetic":false,"types":["wgpu_types::BlendOperation"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.BlendComponent.html\" title=\"struct wgpu_types::BlendComponent\">BlendComponent</a>","synthetic":false,"types":["wgpu_types::BlendComponent"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.BlendState.html\" title=\"struct wgpu_types::BlendState\">BlendState</a>","synthetic":false,"types":["wgpu_types::BlendState"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.ColorTargetState.html\" title=\"struct wgpu_types::ColorTargetState\">ColorTargetState</a>","synthetic":false,"types":["wgpu_types::ColorTargetState"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.PrimitiveTopology.html\" title=\"enum wgpu_types::PrimitiveTopology\">PrimitiveTopology</a>","synthetic":false,"types":["wgpu_types::PrimitiveTopology"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.FrontFace.html\" title=\"enum wgpu_types::FrontFace\">FrontFace</a>","synthetic":false,"types":["wgpu_types::FrontFace"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.Face.html\" title=\"enum wgpu_types::Face\">Face</a>","synthetic":false,"types":["wgpu_types::Face"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.PolygonMode.html\" title=\"enum wgpu_types::PolygonMode\">PolygonMode</a>","synthetic":false,"types":["wgpu_types::PolygonMode"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.PrimitiveState.html\" title=\"struct wgpu_types::PrimitiveState\">PrimitiveState</a>","synthetic":false,"types":["wgpu_types::PrimitiveState"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.MultisampleState.html\" title=\"struct wgpu_types::MultisampleState\">MultisampleState</a>","synthetic":false,"types":["wgpu_types::MultisampleState"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.TextureFormatFeatureFlags.html\" title=\"struct wgpu_types::TextureFormatFeatureFlags\">TextureFormatFeatureFlags</a>","synthetic":false,"types":["wgpu_types::TextureFormatFeatureFlags"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.TextureFormat.html\" title=\"enum wgpu_types::TextureFormat\">TextureFormat</a>","synthetic":false,"types":["wgpu_types::TextureFormat"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.ColorWrite.html\" title=\"struct wgpu_types::ColorWrite\">ColorWrite</a>","synthetic":false,"types":["wgpu_types::ColorWrite"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.StencilState.html\" title=\"struct wgpu_types::StencilState\">StencilState</a>","synthetic":false,"types":["wgpu_types::StencilState"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.DepthBiasState.html\" title=\"struct wgpu_types::DepthBiasState\">DepthBiasState</a>","synthetic":false,"types":["wgpu_types::DepthBiasState"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.DepthStencilState.html\" title=\"struct wgpu_types::DepthStencilState\">DepthStencilState</a>","synthetic":false,"types":["wgpu_types::DepthStencilState"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.IndexFormat.html\" title=\"enum wgpu_types::IndexFormat\">IndexFormat</a>","synthetic":false,"types":["wgpu_types::IndexFormat"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.StencilOperation.html\" title=\"enum wgpu_types::StencilOperation\">StencilOperation</a>","synthetic":false,"types":["wgpu_types::StencilOperation"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.StencilFaceState.html\" title=\"struct wgpu_types::StencilFaceState\">StencilFaceState</a>","synthetic":false,"types":["wgpu_types::StencilFaceState"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.CompareFunction.html\" title=\"enum wgpu_types::CompareFunction\">CompareFunction</a>","synthetic":false,"types":["wgpu_types::CompareFunction"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.InputStepMode.html\" title=\"enum wgpu_types::InputStepMode\">InputStepMode</a>","synthetic":false,"types":["wgpu_types::InputStepMode"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.VertexAttribute.html\" title=\"struct wgpu_types::VertexAttribute\">VertexAttribute</a>","synthetic":false,"types":["wgpu_types::VertexAttribute"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.VertexFormat.html\" title=\"enum wgpu_types::VertexFormat\">VertexFormat</a>","synthetic":false,"types":["wgpu_types::VertexFormat"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.BufferUsage.html\" title=\"struct wgpu_types::BufferUsage\">BufferUsage</a>","synthetic":false,"types":["wgpu_types::BufferUsage"]},{"text":"impl&lt;'de, L&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.BufferDescriptor.html\" title=\"struct wgpu_types::BufferDescriptor\">BufferDescriptor</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_types::BufferDescriptor"]},{"text":"impl&lt;'de, L&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.CommandEncoderDescriptor.html\" title=\"struct wgpu_types::CommandEncoderDescriptor\">CommandEncoderDescriptor</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_types::CommandEncoderDescriptor"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.PresentMode.html\" title=\"enum wgpu_types::PresentMode\">PresentMode</a>","synthetic":false,"types":["wgpu_types::PresentMode"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.TextureUsage.html\" title=\"struct wgpu_types::TextureUsage\">TextureUsage</a>","synthetic":false,"types":["wgpu_types::TextureUsage"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.SwapChainDescriptor.html\" title=\"struct wgpu_types::SwapChainDescriptor\">SwapChainDescriptor</a>","synthetic":false,"types":["wgpu_types::SwapChainDescriptor"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.Color.html\" title=\"struct wgpu_types::Color\">Color</a>","synthetic":false,"types":["wgpu_types::Color"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.TextureDimension.html\" title=\"enum wgpu_types::TextureDimension\">TextureDimension</a>","synthetic":false,"types":["wgpu_types::TextureDimension"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.Origin3d.html\" title=\"struct wgpu_types::Origin3d\">Origin3d</a>","synthetic":false,"types":["wgpu_types::Origin3d"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.Extent3d.html\" title=\"struct wgpu_types::Extent3d\">Extent3d</a>","synthetic":false,"types":["wgpu_types::Extent3d"]},{"text":"impl&lt;'de, L&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.TextureDescriptor.html\" title=\"struct wgpu_types::TextureDescriptor\">TextureDescriptor</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_types::TextureDescriptor"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.TextureAspect.html\" title=\"enum wgpu_types::TextureAspect\">TextureAspect</a>","synthetic":false,"types":["wgpu_types::TextureAspect"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.AddressMode.html\" title=\"enum wgpu_types::AddressMode\">AddressMode</a>","synthetic":false,"types":["wgpu_types::AddressMode"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.FilterMode.html\" title=\"enum wgpu_types::FilterMode\">FilterMode</a>","synthetic":false,"types":["wgpu_types::FilterMode"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.PushConstantRange.html\" title=\"struct wgpu_types::PushConstantRange\">PushConstantRange</a>","synthetic":false,"types":["wgpu_types::PushConstantRange"]},{"text":"impl&lt;'de, L&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.CommandBufferDescriptor.html\" title=\"struct wgpu_types::CommandBufferDescriptor\">CommandBufferDescriptor</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_types::CommandBufferDescriptor"]},{"text":"impl&lt;'de, L&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.RenderBundleDescriptor.html\" title=\"struct wgpu_types::RenderBundleDescriptor\">RenderBundleDescriptor</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_types::RenderBundleDescriptor"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.ImageDataLayout.html\" title=\"struct wgpu_types::ImageDataLayout\">ImageDataLayout</a>","synthetic":false,"types":["wgpu_types::ImageDataLayout"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.BufferBindingType.html\" title=\"enum wgpu_types::BufferBindingType\">BufferBindingType</a>","synthetic":false,"types":["wgpu_types::BufferBindingType"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.TextureSampleType.html\" title=\"enum wgpu_types::TextureSampleType\">TextureSampleType</a>","synthetic":false,"types":["wgpu_types::TextureSampleType"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.StorageTextureAccess.html\" title=\"enum wgpu_types::StorageTextureAccess\">StorageTextureAccess</a>","synthetic":false,"types":["wgpu_types::StorageTextureAccess"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.BindingType.html\" title=\"enum wgpu_types::BindingType\">BindingType</a>","synthetic":false,"types":["wgpu_types::BindingType"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.BindGroupLayoutEntry.html\" title=\"struct wgpu_types::BindGroupLayoutEntry\">BindGroupLayoutEntry</a>","synthetic":false,"types":["wgpu_types::BindGroupLayoutEntry"]},{"text":"impl&lt;'de, B&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.ImageCopyBuffer.html\" title=\"struct wgpu_types::ImageCopyBuffer\">ImageCopyBuffer</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_types::ImageCopyBuffer"]},{"text":"impl&lt;'de, T&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.ImageCopyTexture.html\" title=\"struct wgpu_types::ImageCopyTexture\">ImageCopyTexture</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["wgpu_types::ImageCopyTexture"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.ImageSubresourceRange.html\" title=\"struct wgpu_types::ImageSubresourceRange\">ImageSubresourceRange</a>","synthetic":false,"types":["wgpu_types::ImageSubresourceRange"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.SamplerBorderColor.html\" title=\"enum wgpu_types::SamplerBorderColor\">SamplerBorderColor</a>","synthetic":false,"types":["wgpu_types::SamplerBorderColor"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.QuerySetDescriptor.html\" title=\"struct wgpu_types::QuerySetDescriptor\">QuerySetDescriptor</a>","synthetic":false,"types":["wgpu_types::QuerySetDescriptor"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"wgpu_types/enum.QueryType.html\" title=\"enum wgpu_types::QueryType\">QueryType</a>","synthetic":false,"types":["wgpu_types::QueryType"]},{"text":"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.PipelineStatisticsTypes.html\" title=\"struct wgpu_types::PipelineStatisticsTypes\">PipelineStatisticsTypes</a>","synthetic":false,"types":["wgpu_types::PipelineStatisticsTypes"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()