import { Icon, type IconProps } from "@chakra-ui/react"
import { motion } from "framer-motion"

export const Leaf3 = ({ ...props }: IconProps) => (
	<Icon
		// as={motion.svg}
		fill="url(#gradient3)"
		viewBox="0 0 1000 1000"
		{...props}
	>
		<motion.path
			animate={{ x: [0, 50, 0], y: [50, 0, 50] }}
			d="M672.834,630.358l-50.559,11.123l45.272-37.699c-15.859-68.573-48.539-145.96-62.534-213.487
	c-8.554-41.276-22.341-70.133-38.099-94.873l-54.708,8.792l34.675-37.564c-18.604-25.139-38.009-49.349-53.836-83.796
	c-35.985-78.319-111.968-71.969-111.968-71.969c-22.091,11.093-57.339,33.498-56.04,108.094
	c24.084,14.112,56.04,33.021,56.04,33.021l-54.424-8.434c0.397,3.659,0.845,7.388,1.398,11.256
	c14.817,103.72-6.35,143.938,2.117,292.988h98.781l-93.291,47.086c19.206,102.888,77.858,111.772,115.164,197.577
	c6.697,15.403,14.862,28.417,23.852,39.434l34.711-12.622l-25.158,23.271c30.435,31.046,67.17,42.712,89.461,47.091
	c-58.613-249.029-123.72-496.48-192.558-742.865c-0.433-1.551,1.893-2.163,2.392-0.659c81.491,245.36,150.759,494.6,210.374,746.146
	c0,0,0.009,0,0.009,0s60.123-106.148,79.173-188.701C678.092,681.842,677.204,657.013,672.834,630.358z"
			transition={{
				duration: 10,
				ease: "linear",
				repeat: Number.POSITIVE_INFINITY
			}}
		/>
		<defs>
			<linearGradient gradientTransform="rotate(90)" id="gradient3">
				<stop offset="10%" stopColor="var(--chakra-colors-green-500)" />
				<stop offset="90%" stopColor="var(--chakra-colors-green-800)" />
			</linearGradient>
		</defs>
	</Icon>
)
