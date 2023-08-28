 <template>
 
      <div>
      <div class="timeline">

	<!--first-->
	<div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
		<div class="timeline__event__icon ">
			<!-- <i class="lni-sport"></i>-->

		</div>
		<div class="timeline__event__date">
			Április 2020 - jelenleg
		</div>
		<div class="timeline__event__content ">
			<div class="timeline__event__title">
				Egyéni vállalkozó
			</div>
			<div class="timeline__event__description">
				<p>Full Stack fejlesztés. Webalkalmazások és weboldalak készítése</p>
			</div>
		</div>
	</div>

	<!--second-->

	<div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
		<div class="timeline__event__icon">
			<!-- <i class="lni-sport"></i>-->

		</div>
		<div class="timeline__event__date">
			November 2019 - jelenleg
		</div>
		<div class="timeline__event__content">
			<div class="timeline__event__title">
				SDA DMS Zrt.
			</div>
			<div class="timeline__event__description">
				<p>Full Stack fejlesztő</p>
			</div>
		</div>
	</div>

	<!--third-->

	<div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
		<div class="timeline__event__icon">
			<!-- <i class="lni-sport"></i>-->

		</div>
		<div class="timeline__event__date">
			October 2017 - November 2019
		</div>
		<div class="timeline__event__content">
			<div class="timeline__event__title">
				DLM Solutions Kft.
			</div>
			<div class="timeline__event__description">
				<p>.Net fejlesztő</p>
			</div>

		</div>
	</div>

	<!--forth-->

	<div class="timeline__event animated fadeInUp timeline__event--type1">
		<div class="timeline__event__icon">
			<!-- <i class="lni-sport"></i>-->

		</div>
		<div class="timeline__event__date">
			October 2010 - October 2017
		</div>
		<div class="timeline__event__content">
			<div class="timeline__event__title">
				Hechinger Hungary Kft.
			</div>
			<div class="timeline__event__description">
				<p>MIR mérnök, szoftverfejlesztés</p>
			</div>
		</div>
	</div>

     </div>
      </div>
      
 
 
</template>

<script>
export default {
  data() {
    return {
      aboutImg: require("../../assets/img/about/2.jpg"),
      cv: require("../../assets/img/resume/resume.jpg"),
    };
  },
};
</script>