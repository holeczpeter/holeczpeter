 <template>
  <div class="experience_list">
    <ul class="timeline-ul">
        <li style="--accent-color:#41516C">
            <div class="date">2020 - {{ $t('now') }}</div>
            <div class="title">{{ $t('self_employed') }}</div>
            <div class="descr">{{ $t('full_stack_development') }} | {{$t('web_apps')}} | {{$t('web_pages')}}</div>
        </li>
        <li style="--accent-color:#FBCA3E">
            <div class="date">2019 - {{ $t('now') }}</div>
            <div class="title">SDA DMS ZRT.</div>
            <div class="descr">{{ $t('full_stack_development') }} | .NET | Angular</div>
        </li>
        <li style="--accent-color:#E24A68">
            <div class="date">2017 - 2019</div>
            <div class="title">DLM Solutions Kft.</div>
            <div class="descr">.NET {{$t('developer')}}</div>
        </li>
        <li style="--accent-color:#1B5F8C">
            <div class="date">2010-2017</div>
            <div class="title">Hechinger Hungary Kft.</div>
            <div class="descr">MIR {{ $t('engineer') }} | {{ $t('full_stack_development') }}</div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
};
</script>