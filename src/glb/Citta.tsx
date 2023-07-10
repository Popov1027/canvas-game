import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import BusAnimation from "../components/Sections/City/BusAnimation";

type GLTFResult = GLTF & {
  nodes: {
    casa001_COLOR_0: THREE.Mesh
    tetto_COLOR_0: THREE.Mesh
    condizionatore_COLOR_0: THREE.Mesh
    condizionatore001_COLOR_0: THREE.Mesh
    Cylinder001_COLOR_0: THREE.Mesh
    Cylinder002_COLOR_0: THREE.Mesh
    Cylinder003_COLOR_0: THREE.Mesh
    Icosphere001_COLOR_0: THREE.Mesh
    Icosphere002_COLOR_0: THREE.Mesh
    Icosphere003_COLOR_0: THREE.Mesh
    Icosphere004_COLOR_0: THREE.Mesh
    Icosphere005_COLOR_0: THREE.Mesh
    Icosphere006_COLOR_0: THREE.Mesh
    Icosphere007_COLOR_0: THREE.Mesh
    Icosphere008_COLOR_0: THREE.Mesh
    Icosphere009_COLOR_0: THREE.Mesh
    Icosphere010_COLOR_0: THREE.Mesh
    Icosphere011_COLOR_0: THREE.Mesh
    Icosphere012_COLOR_0: THREE.Mesh
    Icosphere013_COLOR_0: THREE.Mesh
    Icosphere014_COLOR_0: THREE.Mesh
    tenda_COLOR_0: THREE.Mesh
    finistra_COLOR_0: THREE.Mesh
    porta_COLOR_0: THREE.Mesh
    finistra001_COLOR_0: THREE.Mesh
    Cube_COLOR_0: THREE.Mesh
    Cube001_COLOR_0: THREE.Mesh
    Cube002_COLOR_0: THREE.Mesh
    Cube003_COLOR_0: THREE.Mesh
    Cube004_COLOR_0: THREE.Mesh
    Cube005_COLOR_0: THREE.Mesh
    Cube006_COLOR_0: THREE.Mesh
    Cube007_COLOR_0: THREE.Mesh
    Cube008_COLOR_0: THREE.Mesh
    Cube009_COLOR_0: THREE.Mesh
    Cube010_COLOR_0: THREE.Mesh
    vetri_VETRO_0: THREE.Mesh
    finistra002_VETRO_0: THREE.Mesh
    porta001_VETRO_0: THREE.Mesh
    finistra003_VETRO_0: THREE.Mesh
    Plane_COLOR_0: THREE.Mesh
    Plane008_COLOR_0: THREE.Mesh
    Plane008_VETRO_0: THREE.Mesh
    Plane010_COLOR_0: THREE.Mesh
    Plane013_COLOR_0: THREE.Mesh
    Plane016_COLOR_0: THREE.Mesh
    Plane018_COLOR_0: THREE.Mesh
    Plane019_COLOR_0: THREE.Mesh
    Plane021_COLOR_0: THREE.Mesh
    Plane022_COLOR_0: THREE.Mesh
    Plane023_COLOR_0: THREE.Mesh
    Plane024_COLOR_0: THREE.Mesh
    Plane026_COLOR_0: THREE.Mesh
    Plane012_COLOR_0: THREE.Mesh
    Plane014_COLOR_0: THREE.Mesh
    Plane027_COLOR_0: THREE.Mesh
    Plane028_COLOR_0: THREE.Mesh
    Plane029_COLOR_0: THREE.Mesh
    Plane031_COLOR_0: THREE.Mesh
    Plane032_COLOR_0: THREE.Mesh
    Plane033_COLOR_0: THREE.Mesh
    Plane035_COLOR_0: THREE.Mesh
    condizionatore002_COLOR_0: THREE.Mesh
    condizionatore006_COLOR_0: THREE.Mesh
    ['vetro_porta001_stop-texsture001_0']: THREE.Mesh
    tetto004_COLOR_0: THREE.Mesh
    condizionatore008_Color001_0: THREE.Mesh
    ventola009_COLOR_0: THREE.Mesh
    Pareti003_COLOR_0: THREE.Mesh
    base012_COLOR_0: THREE.Mesh
    infissi003_Color001_0: THREE.Mesh
    Porta003_COLOR_0: THREE.Mesh
    condizionatore011_Color001_0: THREE.Mesh
    condizionatore012_COLOR_0: THREE.Mesh
    ['vetro003_stop-texsture001_0']: THREE.Mesh
    condizionatore013_COLOR_0: THREE.Mesh
    ventola014_COLOR_0: THREE.Mesh
    condizionatore003_COLOR_0: THREE.Mesh
    condizionatore004_COLOR_0: THREE.Mesh
    macchina_1_COLOR_0: THREE.Mesh
    taxi_COLOR_0: THREE.Mesh
    macchina_arancio_COLOR_0: THREE.Mesh
    macchina_viola_COLOR_0: THREE.Mesh
    PULA001_COLOR_0: THREE.Mesh
    macchina_viola001_COLOR_0: THREE.Mesh
    taxi001_COLOR_0: THREE.Mesh
    macchina_arancio001_COLOR_0: THREE.Mesh
    macchina_1001_COLOR_0: THREE.Mesh
    taxi005_Color002_0: THREE.Mesh
    taxi006_Color002_0: THREE.Mesh
    taxi002_COLOR_0: THREE.Mesh
    macchina_viola002_COLOR_0: THREE.Mesh
    macchina_1002_COLOR_0: THREE.Mesh
    macchina_viola003_COLOR_0: THREE.Mesh
    macchina_1003_COLOR_0: THREE.Mesh
    bus001_COLOR_0: THREE.Mesh
    semaforo001_COLOR_0: THREE.Mesh
    ['cartello_stop001_stop-texsture_0']: THREE.Mesh
    cartello_stop001_UV_TEX_0: THREE.Mesh
    ['cartello_stop002_stop-texsture_0']: THREE.Mesh
    cartello_stop002_UV_TEX_0: THREE.Mesh
    semaforo002_COLOR_0: THREE.Mesh
    semaforo002_UV_TEX_0: THREE.Mesh
    divieto_di_sosta001_UV_TEX_0: THREE.Mesh
    Parcheggio004_UV_TEX_0: THREE.Mesh
    Precedenza001_UV_TEX_0: THREE.Mesh
    lampione002_COLOR_0: THREE.Mesh
    lampione002_UV_TEX_0: THREE.Mesh
    lampione003_COLOR_0: THREE.Mesh
    lampione003_UV_TEX_0: THREE.Mesh
    lampione004_COLOR_0: THREE.Mesh
    lampione004_UV_TEX_0: THREE.Mesh
    lampione005_COLOR_0: THREE.Mesh
    lampione005_UV_TEX_0: THREE.Mesh
    lampione007_COLOR_0: THREE.Mesh
    lampione007_UV_TEX_0: THREE.Mesh
    lampione008_COLOR_0: THREE.Mesh
    lampione008_UV_TEX_0: THREE.Mesh
    lampione006_COLOR_0: THREE.Mesh
    lampione006_UV_TEX_0: THREE.Mesh
    lampione009_COLOR_0: THREE.Mesh
    lampione009_UV_TEX_0: THREE.Mesh
    lampione010_COLOR_0: THREE.Mesh
    lampione010_UV_TEX_0: THREE.Mesh
    lampione011_COLOR_0: THREE.Mesh
    lampione011_UV_TEX_0: THREE.Mesh
    lampione012_COLOR_0: THREE.Mesh
    lampione012_UV_TEX_0: THREE.Mesh
    lampione013_COLOR_0: THREE.Mesh
    lampione013_UV_TEX_0: THREE.Mesh
    lampione014_COLOR_0: THREE.Mesh
    lampione014_UV_TEX_0: THREE.Mesh
    lampione015_COLOR_0: THREE.Mesh
    lampione015_UV_TEX_0: THREE.Mesh
    lampione016_COLOR_0: THREE.Mesh
    lampione016_UV_TEX_0: THREE.Mesh
    lampione017_COLOR_0: THREE.Mesh
    lampione017_UV_TEX_0: THREE.Mesh
    lampione018_COLOR_0: THREE.Mesh
    lampione018_UV_TEX_0: THREE.Mesh
    lampione019_COLOR_0: THREE.Mesh
    lampione019_UV_TEX_0: THREE.Mesh
    lampione020_COLOR_0: THREE.Mesh
    lampione020_UV_TEX_0: THREE.Mesh
    lampione021_COLOR_0: THREE.Mesh
    lampione021_UV_TEX_0: THREE.Mesh
    lampione022_COLOR_0: THREE.Mesh
    lampione022_UV_TEX_0: THREE.Mesh
    lampione023_COLOR_0: THREE.Mesh
    lampione023_UV_TEX_0: THREE.Mesh
    lampione024_COLOR_0: THREE.Mesh
    lampione024_UV_TEX_0: THREE.Mesh
    lampione025_COLOR_0: THREE.Mesh
    lampione025_UV_TEX_0: THREE.Mesh
    lampione026_COLOR_0: THREE.Mesh
    lampione027_COLOR_0: THREE.Mesh
    lampione027_UV_TEX_0: THREE.Mesh
    lampione028_COLOR_0: THREE.Mesh
    lampione028_UV_TEX_0: THREE.Mesh
    lampione029_COLOR_0: THREE.Mesh
    lampione029_UV_TEX_0: THREE.Mesh
    lampione031_COLOR_0: THREE.Mesh
    lampione031_UV_TEX_0: THREE.Mesh
    lampione032_COLOR_0: THREE.Mesh
    lampione032_UV_TEX_0: THREE.Mesh
    lampione033_COLOR_0: THREE.Mesh
    lampione033_UV_TEX_0: THREE.Mesh
    lampione034_COLOR_0: THREE.Mesh
    lampione034_UV_TEX_0: THREE.Mesh
    lampione035_COLOR_0: THREE.Mesh
    lampione035_UV_TEX_0: THREE.Mesh
    ventola001_COLOR_0: THREE.Mesh
    stabilizzatore001_COLOR_0: THREE.Mesh
    finestra009_COLOR_0: THREE.Mesh
    finestra008_COLOR_0: THREE.Mesh
    finestra002_COLOR_0: THREE.Mesh
    finestra010_COLOR_0: THREE.Mesh
    finestra011_COLOR_0: THREE.Mesh
    finestra012_COLOR_0: THREE.Mesh
    finestra013_COLOR_0: THREE.Mesh
    finestra014_COLOR_0: THREE.Mesh
    Cylinder005_COLOR_0: THREE.Mesh
    Cube014_COLOR_0: THREE.Mesh
    Cube015_COLOR_0: THREE.Mesh
    Cube016_COLOR_0: THREE.Mesh
    casa002_COLOR_0: THREE.Mesh
    casa003_COLOR_0: THREE.Mesh
    base001_COLOR_0: THREE.Mesh
    Cube020_COLOR_0: THREE.Mesh
    base005_COLOR_0: THREE.Mesh
    Cube021_COLOR_0: THREE.Mesh
    base004_COLOR_0: THREE.Mesh
    Cube022_COLOR_0: THREE.Mesh
    Cube023_COLOR_0: THREE.Mesh
    base006_COLOR_0: THREE.Mesh
    Cube024_COLOR_0: THREE.Mesh
    base007_COLOR_0: THREE.Mesh
    base008_COLOR_0: THREE.Mesh
    Cube025_COLOR_0: THREE.Mesh
    Cube026_COLOR_0: THREE.Mesh
    Cube027_COLOR_0: THREE.Mesh
    Cube028_COLOR_0: THREE.Mesh
    Cube029_COLOR_0: THREE.Mesh
    Cube030_COLOR_0: THREE.Mesh
    Cube031_COLOR_0: THREE.Mesh
    base009_COLOR_0: THREE.Mesh
    Cube033_COLOR_0: THREE.Mesh
    Icosphere015_COLOR_0: THREE.Mesh
    Icosphere016_COLOR_0: THREE.Mesh
    Icosphere017_COLOR_0: THREE.Mesh
    Cube034_COLOR_0: THREE.Mesh
    Cube035_COLOR_0: THREE.Mesh
    Cube036_COLOR_0: THREE.Mesh
    Icosphere022_COLOR_0: THREE.Mesh
    Icosphere023_COLOR_0: THREE.Mesh
    lampione036_COLOR_0: THREE.Mesh
    lampione036_UV_TEX_0: THREE.Mesh
    lampione037_COLOR_0: THREE.Mesh
    lampione037_UV_TEX_0: THREE.Mesh
    lampione038_COLOR_0: THREE.Mesh
    lampione038_UV_TEX_0: THREE.Mesh
    lampione039_COLOR_0: THREE.Mesh
    lampione039_UV_TEX_0: THREE.Mesh
    lampione040_COLOR_0: THREE.Mesh
    lampione040_UV_TEX_0: THREE.Mesh
    lampione041_COLOR_0: THREE.Mesh
    lampione041_UV_TEX_0: THREE.Mesh
    lampione042_COLOR_0: THREE.Mesh
    lampione042_UV_TEX_0: THREE.Mesh
    lampione043_COLOR_0: THREE.Mesh
    lampione043_UV_TEX_0: THREE.Mesh
    lampione044_COLOR_0: THREE.Mesh
    lampione044_UV_TEX_0: THREE.Mesh
    lampione045_COLOR_0: THREE.Mesh
    lampione045_UV_TEX_0: THREE.Mesh
    lampione046_COLOR_0: THREE.Mesh
    lampione046_UV_TEX_0: THREE.Mesh
    lampione047_COLOR_0: THREE.Mesh
    lampione047_UV_TEX_0: THREE.Mesh
    lampione048_COLOR_0: THREE.Mesh
    lampione048_UV_TEX_0: THREE.Mesh
    lampione049_COLOR_0: THREE.Mesh
    lampione049_UV_TEX_0: THREE.Mesh
    lampione050_COLOR_0: THREE.Mesh
    lampione050_UV_TEX_0: THREE.Mesh
    lampione051_COLOR_0: THREE.Mesh
    lampione051_UV_TEX_0: THREE.Mesh
    lampione052_COLOR_0: THREE.Mesh
    lampione052_UV_TEX_0: THREE.Mesh
    lampione053_COLOR_0: THREE.Mesh
    lampione053_UV_TEX_0: THREE.Mesh
    lampione054_COLOR_0: THREE.Mesh
    lampione054_UV_TEX_0: THREE.Mesh
    lampione055_COLOR_0: THREE.Mesh
    lampione055_UV_TEX_0: THREE.Mesh
    lampione056_COLOR_0: THREE.Mesh
    lampione056_UV_TEX_0: THREE.Mesh
    lampione057_COLOR_0: THREE.Mesh
    lampione057_UV_TEX_0: THREE.Mesh
    lampione058_COLOR_0: THREE.Mesh
    lampione058_UV_TEX_0: THREE.Mesh
    lampione059_COLOR_0: THREE.Mesh
    lampione059_UV_TEX_0: THREE.Mesh
    lampione060_COLOR_0: THREE.Mesh
    lampione060_UV_TEX_0: THREE.Mesh
    lampione061_COLOR_0: THREE.Mesh
    lampione061_UV_TEX_0: THREE.Mesh
    lampione062_COLOR_0: THREE.Mesh
    lampione062_UV_TEX_0: THREE.Mesh
    lampione063_COLOR_0: THREE.Mesh
    lampione063_UV_TEX_0: THREE.Mesh
    lampione064_COLOR_0: THREE.Mesh
    lampione064_UV_TEX_0: THREE.Mesh
    lampione065_COLOR_0: THREE.Mesh
    lampione065_UV_TEX_0: THREE.Mesh
    lampione066_COLOR_0: THREE.Mesh
    lampione066_UV_TEX_0: THREE.Mesh
    lampione067_COLOR_0: THREE.Mesh
    lampione067_UV_TEX_0: THREE.Mesh
    lampione068_COLOR_0: THREE.Mesh
    lampione068_UV_TEX_0: THREE.Mesh
    lampione069_COLOR_0: THREE.Mesh
    lampione069_UV_TEX_0: THREE.Mesh
    lampione070_COLOR_0: THREE.Mesh
    lampione070_UV_TEX_0: THREE.Mesh
    lampione071_COLOR_0: THREE.Mesh
    lampione071_UV_TEX_0: THREE.Mesh
    lampione072_COLOR_0: THREE.Mesh
    lampione072_UV_TEX_0: THREE.Mesh
    lampione073_COLOR_0: THREE.Mesh
    lampione073_UV_TEX_0: THREE.Mesh
    Icosphere025_COLOR_0: THREE.Mesh
    Icosphere027_COLOR_0: THREE.Mesh
    Icosphere029_COLOR_0: THREE.Mesh
    Icosphere031_COLOR_0: THREE.Mesh
    Icosphere032_COLOR_0: THREE.Mesh
    Icosphere033_COLOR_0: THREE.Mesh
    Icosphere034_COLOR_0: THREE.Mesh
    Icosphere044_COLOR_0: THREE.Mesh
    Icosphere049_COLOR_0: THREE.Mesh
    Cylinder007_COLOR_0: THREE.Mesh
    Icosphere051_COLOR_0: THREE.Mesh
    Icosphere052_COLOR_0: THREE.Mesh
    Icosphere053_COLOR_0: THREE.Mesh
    Icosphere054_COLOR_0: THREE.Mesh
    Icosphere055_COLOR_0: THREE.Mesh
    Icosphere056_COLOR_0: THREE.Mesh
    Icosphere057_COLOR_0: THREE.Mesh
    Icosphere058_COLOR_0: THREE.Mesh
    Icosphere059_COLOR_0: THREE.Mesh
    Icosphere060_COLOR_0: THREE.Mesh
    Icosphere061_COLOR_0: THREE.Mesh
    Icosphere062_COLOR_0: THREE.Mesh
    Icosphere063_COLOR_0: THREE.Mesh
    Icosphere064_COLOR_0: THREE.Mesh
    Icosphere065_COLOR_0: THREE.Mesh
    Icosphere066_COLOR_0: THREE.Mesh
    Icosphere067_COLOR_0: THREE.Mesh
    Icosphere068_COLOR_0: THREE.Mesh
    Icosphere069_COLOR_0: THREE.Mesh
    Icosphere070_COLOR_0: THREE.Mesh
    Icosphere071_COLOR_0: THREE.Mesh
    Icosphere072_COLOR_0: THREE.Mesh
    Icosphere073_COLOR_0: THREE.Mesh
    Icosphere074_COLOR_0: THREE.Mesh
    Icosphere075_COLOR_0: THREE.Mesh
    Icosphere076_COLOR_0: THREE.Mesh
    Icosphere077_COLOR_0: THREE.Mesh
    Icosphere078_COLOR_0: THREE.Mesh
    Icosphere079_COLOR_0: THREE.Mesh
    Icosphere080_COLOR_0: THREE.Mesh
    Icosphere081_COLOR_0: THREE.Mesh
    Icosphere082_COLOR_0: THREE.Mesh
    Icosphere083_COLOR_0: THREE.Mesh
    Icosphere084_COLOR_0: THREE.Mesh
    Icosphere085_COLOR_0: THREE.Mesh
    Icosphere086_COLOR_0: THREE.Mesh
    Icosphere091_COLOR_0: THREE.Mesh
    Icosphere093_COLOR_0: THREE.Mesh
    Cylinder012_COLOR_0: THREE.Mesh
    Cylinder013_COLOR_0: THREE.Mesh
    Cylinder014_COLOR_0: THREE.Mesh
    Cylinder015_COLOR_0: THREE.Mesh
    Cylinder016_COLOR_0: THREE.Mesh
    Cylinder017_COLOR_0: THREE.Mesh
    Cylinder018_COLOR_0: THREE.Mesh
    Cylinder019_COLOR_0: THREE.Mesh
    Icosphere036_COLOR_0: THREE.Mesh
    Icosphere037_COLOR_0: THREE.Mesh
    Icosphere038_COLOR_0: THREE.Mesh
    Icosphere039_COLOR_0: THREE.Mesh
    Icosphere040_COLOR_0: THREE.Mesh
    Icosphere048_COLOR_0: THREE.Mesh
    Icosphere050_COLOR_0: THREE.Mesh
    Icosphere094_COLOR_0: THREE.Mesh
    Icosphere095_COLOR_0: THREE.Mesh
    Icosphere096_COLOR_0: THREE.Mesh
    ['cartello_stop003_stop-texsture_0']: THREE.Mesh
    cartello_stop003_UV_TEX_0: THREE.Mesh
    ['cartello_stop004_stop-texsture_0']: THREE.Mesh
    cartello_stop004_UV_TEX_0: THREE.Mesh
    semaforo003_COLOR_0: THREE.Mesh
    semaforo004_COLOR_0: THREE.Mesh
    ['cartello_stop005_stop-texsture_0']: THREE.Mesh
    cartello_stop005_UV_TEX_0: THREE.Mesh
    Cylinder006_COLOR_0: THREE.Mesh
    Cylinder009_COLOR_0: THREE.Mesh
    Cylinder011_COLOR_0: THREE.Mesh
    Cylinder020_COLOR_0: THREE.Mesh
    Cube017_COLOR_0: THREE.Mesh
    tenda003_COLOR_0: THREE.Mesh
    base002_COLOR_0: THREE.Mesh
    Cylinder004_COLOR_0: THREE.Mesh
    Cylinder021_COLOR_0: THREE.Mesh
    base003_COLOR_0: THREE.Mesh
    base010_COLOR_0: THREE.Mesh
    base011_COLOR_0: THREE.Mesh
    base013_COLOR_0: THREE.Mesh
    base014_COLOR_0: THREE.Mesh
    base015_COLOR_0: THREE.Mesh
    base016_COLOR_0: THREE.Mesh
    Cube011_COLOR_0: THREE.Mesh
    Cube012_COLOR_0: THREE.Mesh
    base017_COLOR_0: THREE.Mesh
    base018_COLOR_0: THREE.Mesh
    base019_COLOR_0: THREE.Mesh
    base020_COLOR_0: THREE.Mesh
    base021_COLOR_0: THREE.Mesh
    Icosphere018_COLOR_0: THREE.Mesh
    Icosphere019_COLOR_0: THREE.Mesh
    Icosphere020_COLOR_0: THREE.Mesh
    Icosphere021_COLOR_0: THREE.Mesh
    Icosphere024_COLOR_0: THREE.Mesh
    Icosphere026_COLOR_0: THREE.Mesh
    Icosphere097_COLOR_0: THREE.Mesh
    Icosphere098_COLOR_0: THREE.Mesh
    Icosphere099_COLOR_0: THREE.Mesh
    Icosphere100_COLOR_0: THREE.Mesh
    Icosphere028_COLOR_0: THREE.Mesh
    Icosphere030_COLOR_0: THREE.Mesh
    Icosphere101_COLOR_0: THREE.Mesh
    Icosphere102_COLOR_0: THREE.Mesh
    Icosphere103_COLOR_0: THREE.Mesh
    Icosphere104_COLOR_0: THREE.Mesh
    Icosphere105_COLOR_0: THREE.Mesh
    Icosphere106_COLOR_0: THREE.Mesh
    Icosphere107_COLOR_0: THREE.Mesh
    Icosphere108_COLOR_0: THREE.Mesh
    Icosphere109_COLOR_0: THREE.Mesh
    Icosphere110_COLOR_0: THREE.Mesh
    Icosphere111_COLOR_0: THREE.Mesh
    Icosphere112_COLOR_0: THREE.Mesh
    Icosphere113_COLOR_0: THREE.Mesh
    Icosphere114_COLOR_0: THREE.Mesh
    Icosphere115_COLOR_0: THREE.Mesh
    Icosphere116_COLOR_0: THREE.Mesh
    Icosphere117_COLOR_0: THREE.Mesh
    Cylinder008_COLOR_0: THREE.Mesh
    Cylinder022_COLOR_0: THREE.Mesh
    Cylinder023_COLOR_0: THREE.Mesh
    Icosphere118_COLOR_0: THREE.Mesh
    Icosphere119_COLOR_0: THREE.Mesh
    Icosphere120_COLOR_0: THREE.Mesh
    Icosphere121_COLOR_0: THREE.Mesh
    Icosphere122_COLOR_0: THREE.Mesh
    Icosphere123_COLOR_0: THREE.Mesh
    Icosphere124_COLOR_0: THREE.Mesh
    Icosphere125_COLOR_0: THREE.Mesh
    Icosphere126_COLOR_0: THREE.Mesh
    Icosphere127_COLOR_0: THREE.Mesh
    Icosphere128_COLOR_0: THREE.Mesh
    Icosphere129_COLOR_0: THREE.Mesh
    Icosphere130_COLOR_0: THREE.Mesh
    Icosphere131_COLOR_0: THREE.Mesh
    Icosphere132_COLOR_0: THREE.Mesh
    Icosphere133_COLOR_0: THREE.Mesh
    Icosphere134_COLOR_0: THREE.Mesh
    Icosphere135_COLOR_0: THREE.Mesh
    Icosphere136_COLOR_0: THREE.Mesh
    Icosphere137_COLOR_0: THREE.Mesh
    Icosphere092_COLOR_0: THREE.Mesh
    Icosphere138_COLOR_0: THREE.Mesh
    Icosphere139_COLOR_0: THREE.Mesh
    Icosphere140_COLOR_0: THREE.Mesh
    Icosphere141_COLOR_0: THREE.Mesh
    Icosphere142_COLOR_0: THREE.Mesh
    Icosphere143_COLOR_0: THREE.Mesh
    Icosphere144_COLOR_0: THREE.Mesh
    Icosphere145_COLOR_0: THREE.Mesh
    Icosphere146_COLOR_0: THREE.Mesh
    Icosphere147_COLOR_0: THREE.Mesh
    Icosphere148_COLOR_0: THREE.Mesh
    Icosphere149_COLOR_0: THREE.Mesh
    Icosphere150_COLOR_0: THREE.Mesh
    Icosphere151_COLOR_0: THREE.Mesh
    Icosphere152_COLOR_0: THREE.Mesh
    Icosphere153_COLOR_0: THREE.Mesh
    Cylinder024_COLOR_0: THREE.Mesh
    Cylinder025_COLOR_0: THREE.Mesh
    Icosphere154_COLOR_0: THREE.Mesh
    Icosphere155_COLOR_0: THREE.Mesh
    Icosphere156_COLOR_0: THREE.Mesh
    Icosphere157_COLOR_0: THREE.Mesh
    Icosphere158_COLOR_0: THREE.Mesh
    Icosphere159_COLOR_0: THREE.Mesh
    Icosphere160_COLOR_0: THREE.Mesh
    Icosphere161_COLOR_0: THREE.Mesh
    Icosphere162_COLOR_0: THREE.Mesh
    Icosphere163_COLOR_0: THREE.Mesh
    Icosphere164_COLOR_0: THREE.Mesh
    Icosphere165_COLOR_0: THREE.Mesh
    Icosphere166_COLOR_0: THREE.Mesh
    Icosphere167_COLOR_0: THREE.Mesh
    Icosphere168_COLOR_0: THREE.Mesh
    Icosphere169_COLOR_0: THREE.Mesh
    Icosphere170_COLOR_0: THREE.Mesh
    Icosphere171_COLOR_0: THREE.Mesh
    Icosphere172_COLOR_0: THREE.Mesh
    Icosphere173_COLOR_0: THREE.Mesh
    Icosphere174_COLOR_0: THREE.Mesh
    Icosphere175_COLOR_0: THREE.Mesh
    Icosphere176_COLOR_0: THREE.Mesh
    Icosphere177_COLOR_0: THREE.Mesh
    Icosphere178_COLOR_0: THREE.Mesh
    Icosphere179_COLOR_0: THREE.Mesh
    Icosphere180_COLOR_0: THREE.Mesh
    Icosphere181_COLOR_0: THREE.Mesh
    Icosphere182_COLOR_0: THREE.Mesh
    Icosphere183_COLOR_0: THREE.Mesh
    Icosphere184_COLOR_0: THREE.Mesh
    Icosphere185_COLOR_0: THREE.Mesh
    Icosphere186_COLOR_0: THREE.Mesh
    Icosphere187_COLOR_0: THREE.Mesh
    Icosphere188_COLOR_0: THREE.Mesh
    Icosphere189_COLOR_0: THREE.Mesh
    Icosphere190_COLOR_0: THREE.Mesh
    Icosphere191_COLOR_0: THREE.Mesh
    Icosphere192_COLOR_0: THREE.Mesh
    Icosphere035_COLOR_0: THREE.Mesh
    Icosphere041_COLOR_0: THREE.Mesh
    Icosphere047_COLOR_0: THREE.Mesh
    Icosphere193_COLOR_0: THREE.Mesh
    Icosphere194_COLOR_0: THREE.Mesh
    Icosphere195_COLOR_0: THREE.Mesh
    Icosphere196_COLOR_0: THREE.Mesh
    Icosphere197_COLOR_0: THREE.Mesh
    Icosphere198_COLOR_0: THREE.Mesh
    Icosphere199_COLOR_0: THREE.Mesh
    Icosphere200_COLOR_0: THREE.Mesh
    Icosphere201_COLOR_0: THREE.Mesh
    Icosphere202_COLOR_0: THREE.Mesh
    Icosphere203_COLOR_0: THREE.Mesh
    Icosphere204_COLOR_0: THREE.Mesh
    Icosphere205_COLOR_0: THREE.Mesh
    Icosphere206_COLOR_0: THREE.Mesh
    Icosphere207_COLOR_0: THREE.Mesh
    Icosphere208_COLOR_0: THREE.Mesh
    Cube013_COLOR_0: THREE.Mesh
    Cube018_COLOR_0: THREE.Mesh
    Cube019_COLOR_0: THREE.Mesh
    Cube032_COLOR_0: THREE.Mesh
    Cube037_COLOR_0: THREE.Mesh
    Cube038_COLOR_0: THREE.Mesh
    Cube039_COLOR_0: THREE.Mesh
    Cylinder027_COLOR_0: THREE.Mesh
    Cube040_COLOR_0: THREE.Mesh
    base022_COLOR_0: THREE.Mesh
    Icosphere046_COLOR_0: THREE.Mesh
    Icosphere209_COLOR_0: THREE.Mesh
    Icosphere210_COLOR_0: THREE.Mesh
    Icosphere211_COLOR_0: THREE.Mesh
    Icosphere212_COLOR_0: THREE.Mesh
    Icosphere213_COLOR_0: THREE.Mesh
    Icosphere214_COLOR_0: THREE.Mesh
    Icosphere215_COLOR_0: THREE.Mesh
    Icosphere216_COLOR_0: THREE.Mesh
    Icosphere217_COLOR_0: THREE.Mesh
    Icosphere218_COLOR_0: THREE.Mesh
    Icosphere219_COLOR_0: THREE.Mesh
    Icosphere220_COLOR_0: THREE.Mesh
    Icosphere221_COLOR_0: THREE.Mesh
    Icosphere222_COLOR_0: THREE.Mesh
    Icosphere223_COLOR_0: THREE.Mesh
    Icosphere224_COLOR_0: THREE.Mesh
    Icosphere225_COLOR_0: THREE.Mesh
    Icosphere226_COLOR_0: THREE.Mesh
    Icosphere227_COLOR_0: THREE.Mesh
    Icosphere229_COLOR_0: THREE.Mesh
    Icosphere230_COLOR_0: THREE.Mesh
    Icosphere231_COLOR_0: THREE.Mesh
    Icosphere232_COLOR_0: THREE.Mesh
    stop_segnali_orrizontali_0: THREE.Mesh
    strisce_pedonali_segnali_orrizontali_0: THREE.Mesh
    curva_segnali_orrizontali_0: THREE.Mesh
    fermata_autobus_segnali_orrizontali_0: THREE.Mesh
    strada_normale_segnali_orrizontali_0: THREE.Mesh
    stop001_segnali_orrizontali_0: THREE.Mesh
    stop002_segnali_orrizontali_0: THREE.Mesh
    stop003_segnali_orrizontali_0: THREE.Mesh
    strada_normale003_segnali_orrizontali_0: THREE.Mesh
    strada_normale004_segnali_orrizontali_0: THREE.Mesh
    strada_normale005_segnali_orrizontali_0: THREE.Mesh
    strada_normale006_segnali_orrizontali_0: THREE.Mesh
    curva001_segnali_orrizontali_0: THREE.Mesh
    strada_normale007_segnali_orrizontali_0: THREE.Mesh
    strada_normale008_segnali_orrizontali_0: THREE.Mesh
    Parcheggio002_segnali_orrizontali_0: THREE.Mesh
    curva002_segnali_orrizontali_0: THREE.Mesh
    strada_normale009_segnali_orrizontali_0: THREE.Mesh
    Parcheggio003_segnali_orrizontali_0: THREE.Mesh
    gelato_COLOR_0: THREE.Mesh
    curva003_COLOR_0: THREE.Mesh
    curva004_COLOR_0: THREE.Mesh
    curva005_COLOR_0: THREE.Mesh
    strada_normale011_segnali_orrizontali_0: THREE.Mesh
    strada_normale012_segnali_orrizontali_0: THREE.Mesh
    strada_normale013_segnali_orrizontali_0: THREE.Mesh
    strada_normale014_segnali_orrizontali_0: THREE.Mesh
    strada_normale015_segnali_orrizontali_0: THREE.Mesh
    curva007_segnali_orrizontali_0: THREE.Mesh
    strada_normale016_segnali_orrizontali_0: THREE.Mesh
    strada_normale017_segnali_orrizontali_0: THREE.Mesh
    strada_normale018_segnali_orrizontali_0: THREE.Mesh
    strada_normale019_segnali_orrizontali_0: THREE.Mesh
    strada_normale020_segnali_orrizontali_0: THREE.Mesh
    strada_normale021_segnali_orrizontali_0: THREE.Mesh
    strada_normale022_segnali_orrizontali_0: THREE.Mesh
    curva008_COLOR_0: THREE.Mesh
    curva009_COLOR_0: THREE.Mesh
    curva010_COLOR_0: THREE.Mesh
    stop004_segnali_orrizontali_0: THREE.Mesh
    strada_normale001_segnali_orrizontali_0: THREE.Mesh
    curva006_COLOR_0: THREE.Mesh
    curva011_COLOR_0: THREE.Mesh
    strada_normale024_COLOR_0: THREE.Mesh
    gelato001_COLOR_0: THREE.Mesh
    stop005_segnali_orrizontali_0: THREE.Mesh
    stop006_segnali_orrizontali_0: THREE.Mesh
  }
  materials: {
    COLOR: THREE.MeshStandardMaterial
    VETRO: THREE.MeshStandardMaterial
    ['stop-texsture.001']: THREE.MeshStandardMaterial
    ['Color.001']: THREE.MeshStandardMaterial
    ['Color.002']: THREE.MeshStandardMaterial
    ['stop-texsture']: THREE.MeshStandardMaterial
    UV_TEX: THREE.MeshStandardMaterial
    segnali_orrizontali: THREE.MeshStandardMaterial
  }
}

export default function Citta(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/assets/citta.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null} position={[2.92, 0.4, -2.41]} scale={[0.11, 0.09, 0.1]}>
      <group scale={0.01}>
        <group position={[-800, 0, 1000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100}>
          <mesh geometry={nodes.Plane_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.casa001_COLOR_0.geometry} material={materials.COLOR} position={[-0.11, 0.21, 0]} scale={[0.91, 0.95, 1]} />
          <mesh geometry={nodes.tetto_COLOR_0.geometry} material={materials.COLOR} position={[-0.11, 0.21, 0.08]} scale={[0.91, 0.95, 1]} />
          <mesh geometry={nodes.condizionatore_COLOR_0.geometry} material={materials.COLOR} position={[0.08, 6.35, -0.94]} />
          <mesh geometry={nodes.condizionatore001_COLOR_0.geometry} material={materials.COLOR} position={[0.08, 6.35, -0.94]} />
          <mesh geometry={nodes.Cylinder001_COLOR_0.geometry} material={materials.COLOR} position={[-0.12, 2.24, 2.63]} />
          <mesh geometry={nodes.Cylinder002_COLOR_0.geometry} material={materials.COLOR} position={[-0.12, 2.42, 2.63]} />
          <mesh geometry={nodes.Cylinder003_COLOR_0.geometry} material={materials.COLOR} position={[-0.12, 2.6, 2.63]} />
          <mesh geometry={nodes.Icosphere001_COLOR_0.geometry} material={materials.COLOR} position={[0.6, -3.67, 0.49]} />
          <mesh geometry={nodes.Icosphere002_COLOR_0.geometry} material={materials.COLOR} position={[-0.29, -3.67, 0.49]} />
          <mesh geometry={nodes.Icosphere003_COLOR_0.geometry} material={materials.COLOR} position={[-0.89, -3.67, 0.49]} />
          <mesh geometry={nodes.Icosphere004_COLOR_0.geometry} material={materials.COLOR} position={[1.19, -3.67, 0.49]} />
          <mesh geometry={nodes.Icosphere005_COLOR_0.geometry} material={materials.COLOR} position={[-1.78, -3.67, 0.49]} />
          <mesh geometry={nodes.Icosphere006_COLOR_0.geometry} material={materials.COLOR} position={[-2.4, -3.67, 0.49]} />
          <mesh geometry={nodes.Icosphere007_COLOR_0.geometry} material={materials.COLOR} position={[1.94, -0.64, 0.49]} />
          <mesh geometry={nodes.Icosphere008_COLOR_0.geometry} material={materials.COLOR} position={[1.94, 2.18, 0.49]} />
          <mesh geometry={nodes.Icosphere009_COLOR_0.geometry} material={materials.COLOR} position={[1.19, 4.18, 0.49]} />
          <mesh geometry={nodes.Icosphere010_COLOR_0.geometry} material={materials.COLOR} position={[0.6, 4.18, 0.49]} />
          <mesh geometry={nodes.Icosphere011_COLOR_0.geometry} material={materials.COLOR} position={[-0.29, 4.18, 0.49]} />
          <mesh geometry={nodes.Icosphere012_COLOR_0.geometry} material={materials.COLOR} position={[-0.89, 4.18, 0.49]} />
          <mesh geometry={nodes.Icosphere013_COLOR_0.geometry} material={materials.COLOR} position={[-1.78, 4.18, 0.49]} />
          <mesh geometry={nodes.Icosphere014_COLOR_0.geometry} material={materials.COLOR} position={[-2.4, 4.18, 0.49]} />
          <mesh geometry={nodes.tenda_COLOR_0.geometry} material={materials.COLOR} position={[2.36, -2.33, 2.03]} scale={[0.24, 0.18, 0.24]} />
          <mesh geometry={nodes.finistra_COLOR_0.geometry} material={materials.COLOR} position={[-0.11, -4.3, 0]} />
          <mesh geometry={nodes.porta_COLOR_0.geometry} material={materials.COLOR} position={[-0.11, 0.21, 0]} />
          <mesh geometry={nodes.finistra001_COLOR_0.geometry} material={materials.COLOR} position={[-0.11, -4.3, 0]} rotation={[0, 0, -Math.PI]} />
          <mesh geometry={nodes.Cube_COLOR_0.geometry} material={materials.COLOR} position={[1.03, 0.3, 2.04]} />
          <mesh geometry={nodes.Cube001_COLOR_0.geometry} material={materials.COLOR} position={[1.03, 0.58, 2.04]} />
          <mesh geometry={nodes.Cube002_COLOR_0.geometry} material={materials.COLOR} position={[1.95, -0.63, 0.33]} />
          <mesh geometry={nodes.Cube003_COLOR_0.geometry} material={materials.COLOR} position={[1.95, 2.19, 0.33]} />
          <mesh geometry={nodes.Cube004_COLOR_0.geometry} material={materials.COLOR} position={[1.2, -3.67, 0.33]} />
          <mesh geometry={nodes.Cube005_COLOR_0.geometry} material={materials.COLOR} position={[-0.28, -3.67, 0.33]} />
          <mesh geometry={nodes.Cube006_COLOR_0.geometry} material={materials.COLOR} position={[-1.75, -3.67, 0.33]} />
          <mesh geometry={nodes.Cube007_COLOR_0.geometry} material={materials.COLOR} position={[1.2, 4.2, 0.33]} />
          <mesh geometry={nodes.Cube008_COLOR_0.geometry} material={materials.COLOR} position={[-0.28, 4.2, 0.33]} />
          <mesh geometry={nodes.Cube009_COLOR_0.geometry} material={materials.COLOR} position={[-1.75, 4.2, 0.33]} />
          <mesh geometry={nodes.Cube010_COLOR_0.geometry} material={materials.COLOR} position={[2.11, 0, 2.83]} />
          <mesh geometry={nodes.vetri_VETRO_0.geometry} material={materials.VETRO} position={[-0.11, 0.21, 0]} scale={[0.91, 0.95, 1]} />
          <mesh geometry={nodes.finistra002_VETRO_0.geometry} material={materials.VETRO} position={[-0.11, -4.3, 0]} />
          <mesh geometry={nodes.porta001_VETRO_0.geometry} material={materials.VETRO} position={[-0.11, 0.21, 0]} />
          <mesh geometry={nodes.finistra003_VETRO_0.geometry} material={materials.VETRO} position={[-0.11, -4.3, 0]} rotation={[0, 0, -Math.PI]} />
        </group>
        <group position={[-800, 0, -2000]} rotation={[-Math.PI / 2, 0, 0]} scale={112.49}>
          <mesh geometry={nodes.Plane008_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.Plane008_VETRO_0.geometry} material={materials.VETRO} />
        </group>
        <group position={[-2214.27, 363.1, -1575.72]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
          <mesh geometry={nodes['cartello_stop001_stop-texsture_0'].geometry} material={materials['stop-texsture']} />
          <mesh geometry={nodes.cartello_stop001_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1360.88, 363.1, -426.42]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
          <mesh geometry={nodes['cartello_stop002_stop-texsture_0'].geometry} material={materials['stop-texsture']} />
          <mesh geometry={nodes.cartello_stop002_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1227.78, 264.11, -1437.3]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100}>
          <mesh geometry={nodes.semaforo002_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.semaforo002_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-2244.83, 363.58, -326.78]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione002_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione002_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-6047.34, 363.58, -1114.79]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione003_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione003_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-2419.58, 363.58, -1429.34]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione004_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione004_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1108.93, 363.58, -571.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione005_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione005_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-5514.34, 363.58, -178.24]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione007_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione007_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-4219.55, 363.58, 581.94]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione008_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione008_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-2554.15, 363.58, 3588.58]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione006_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione006_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1337.86, 363.58, 2459.8]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione009_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione009_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1337.86, 363.58, 2459.8]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione010_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione010_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1355.2, 363.58, -2248.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione011_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione011_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-3357.03, 363.58, 581.94]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione012_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione012_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-4219.55, 363.58, 1341.02]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione013_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione013_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-3357.03, 363.58, 1341.02]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione014_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione014_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-4219.55, 363.58, 2132.43]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione015_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione015_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-3357.03, 363.58, 2132.43]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione016_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione016_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-2554.15, 363.58, 2720.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione017_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione017_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-4959.66, 363.58, 3588.58]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione018_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione018_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-4959.66, 363.58, 2720.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione019_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione019_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-4196.55, 363.58, 3588.58]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione020_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione020_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-3412.42, 363.58, 3588.58]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione021_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione021_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1337.86, 363.58, 1666.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione022_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione022_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-2226.06, 363.58, 1666.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione023_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione023_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1337.86, 363.58, 656.57]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione024_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione024_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-2226.06, 363.58, 656.57]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione025_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione025_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-2971.05, 363.58, -1432.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione027_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione027_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-3957.25, 363.58, -564.01]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione028_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione028_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-3957.25, 363.58, -1432.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione029_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione029_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-3957.25, 363.58, -1432.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione031_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione031_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-6391.84, 363.58, 644.08]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione032_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione032_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-5529.33, 363.58, 644.08]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione033_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione033_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-6391.84, 363.58, 1667.28]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione034_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione034_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-5529.33, 363.58, 1667.28]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione035_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione035_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-4862.09, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione036_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione036_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-7267.61, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione037_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione037_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-6504.5, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione038_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione038_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-5720.36, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione039_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione039_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1679.96, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione040_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione040_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-4085.48, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione041_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione041_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-3322.37, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione042_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione042_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-2538.23, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione043_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione043_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1562.15, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione044_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione044_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-843.37, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione045_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione045_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-80.26, 363.58, 5418.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione046_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione046_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-4862.09, 363.58, 6245.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione047_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione047_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-7267.61, 363.58, 6245.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione048_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione048_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-6504.5, 363.58, 6245.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione049_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione049_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-5720.36, 363.58, 6245.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione050_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione050_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1679.96, 363.58, 6245.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione051_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione051_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-4085.48, 363.58, 6245.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione052_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione052_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-3322.37, 363.58, 6245.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione053_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione053_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-2538.23, 363.58, 6245.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione054_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione054_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-843.37, 363.58, 6245.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione055_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione055_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-80.26, 363.58, 6245.26]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione056_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione056_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1089.2, 363.58, 6107.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione057_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione057_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1612.38, 363.58, 3945.86]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione058_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione058_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1612.38, 363.58, 4772.97]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione059_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione059_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1604.35, 363.58, 2270.7]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione060_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione060_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1604.35, 363.58, 3097.81]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione061_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione061_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[782.12, 363.58, 3695.56]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione062_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione062_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[782.12, 363.58, 4522.67]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione063_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione063_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[774.09, 363.58, 2020.4]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione064_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione064_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[774.09, 363.58, 2847.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione065_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione065_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1617.65, 363.58, 598.86]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione066_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione066_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1617.65, 363.58, 1425.96]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione067_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione067_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1609.62, 363.58, -1076.3]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione068_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione068_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1609.62, 363.58, -249.2]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione069_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione069_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[767.37, 363.58, 426.2]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione070_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione070_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[767.37, 363.58, 1253.31]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione071_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione071_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[754.37, 363.58, -407]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione072_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione072_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[761.6, 363.58, -1515.79]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.lampione073_COLOR_0.geometry} material={materials.COLOR} />
          <mesh geometry={nodes.lampione073_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[-1360.88, 363.1, -426.42]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
          <mesh geometry={nodes['cartello_stop003_stop-texsture_0'].geometry} material={materials['stop-texsture']} />
          <mesh geometry={nodes.cartello_stop003_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[1626.72, 363.1, -426.42]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
          <mesh geometry={nodes['cartello_stop004_stop-texsture_0'].geometry} material={materials['stop-texsture']} />
          <mesh geometry={nodes.cartello_stop004_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <group position={[771.18, 363.1, -1575.72]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
          <mesh geometry={nodes['cartello_stop005_stop-texsture_0'].geometry} material={materials['stop-texsture']} />
          <mesh geometry={nodes.cartello_stop005_UV_TEX_0.geometry} material={materials.UV_TEX} />
        </group>
        <mesh geometry={nodes.Plane010_COLOR_0.geometry} material={materials.COLOR} position={[-800, 0, 2000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane013_COLOR_0.geometry} material={materials.COLOR} position={[-2800, 0, -2000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane016_COLOR_0.geometry} material={materials.COLOR} position={[-3800, 0, -2000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane018_COLOR_0.geometry} material={materials.COLOR} position={[-4800, 0, -2000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane019_COLOR_0.geometry} material={materials.COLOR} position={[-6959.11, 0, 156.11]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane021_COLOR_0.geometry} material={materials.COLOR} position={[-6959.11, 0, 1997]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane022_COLOR_0.geometry} material={materials.COLOR} position={[-4959.11, 0, 1156.11]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane023_COLOR_0.geometry} material={materials.COLOR} position={[-4959.11, 0, 1997]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane024_COLOR_0.geometry} material={materials.COLOR} position={[-4959.11, 0, 156.11]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane026_COLOR_0.geometry} material={materials.COLOR} position={[-3800, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane012_COLOR_0.geometry} material={materials.COLOR} position={[141.18, 0, -2058.83]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={111.77} />
        <mesh geometry={nodes.Plane014_COLOR_0.geometry} material={materials.COLOR} position={[-2803, 0, 4156.11]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane027_COLOR_0.geometry} material={materials.COLOR} position={[-3803, 0, 4156.11]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane028_COLOR_0.geometry} material={materials.COLOR} position={[-4803, 0, 4156.11]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane029_COLOR_0.geometry} material={materials.COLOR} position={[2200, 0, -2000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane031_COLOR_0.geometry} material={materials.COLOR} position={[-2800, 0, 2000]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Plane032_COLOR_0.geometry} material={materials.COLOR} position={[200, 0, 4681.78]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Plane033_COLOR_0.geometry} material={materials.COLOR} position={[-6959.11, 0, 6837.9]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Plane035_COLOR_0.geometry} material={materials.COLOR} position={[-800, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.condizionatore002_COLOR_0.geometry} material={materials.COLOR} position={[-2677.7, 297.5, -118.67]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes.condizionatore006_COLOR_0.geometry} material={materials.COLOR} position={[-2737.66, 297.5, -118.67]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes['vetro_porta001_stop-texsture001_0'].geometry} material={materials['stop-texsture.001']} position={[-2666.93, 142.83, 14.98]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes.tetto004_COLOR_0.geometry} material={materials.COLOR} position={[-2666.93, 254.55, 14.98]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes.condizionatore008_Color001_0.geometry} material={materials['Color.001']} position={[-2678.21, 261.78, -107.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ventola009_COLOR_0.geometry} material={materials.COLOR} position={[-2678.07, 307.24, -108.6]} rotation={[-Math.PI / 2, 0, 0]} scale={154.22} />
        <mesh geometry={nodes.Pareti003_COLOR_0.geometry} material={materials.COLOR} position={[-2666.93, 142.83, 14.98]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes.base012_COLOR_0.geometry} material={materials.COLOR} position={[-2666.93, 142.83, 14.98]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes.infissi003_Color001_0.geometry} material={materials['Color.001']} position={[-2666.93, 142.83, 14.98]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes.Porta003_COLOR_0.geometry} material={materials.COLOR} position={[-2666.93, 142.83, 14.98]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes.condizionatore011_Color001_0.geometry} material={materials['Color.001']} position={[-2678.21, 261.78, -107.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.condizionatore012_COLOR_0.geometry} material={materials.COLOR} position={[-2730.72, 261.78, -107.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['vetro003_stop-texsture001_0'].geometry} material={materials['stop-texsture.001']} position={[-2666.93, 142.83, 14.98]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes.condizionatore013_COLOR_0.geometry} material={materials.COLOR} position={[-2730.72, 261.78, -107.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ventola014_COLOR_0.geometry} material={materials.COLOR} position={[-2738.03, 307.24, -108.6]} rotation={[-Math.PI / 2, 0, 0]} scale={154.22} />
        <mesh geometry={nodes.condizionatore003_COLOR_0.geometry} material={materials.COLOR} position={[-4938.61, 1286.93, 57.69]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes.condizionatore004_COLOR_0.geometry} material={materials.COLOR} position={[-4998.57, 1286.93, 57.69]} rotation={[-Math.PI / 2, 0, 0]} scale={114.19} />
        <mesh geometry={nodes.macchina_1_COLOR_0.geometry} material={materials.COLOR} position={[-2007.66, -5.2, -1948.3]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={58.66} />
        <mesh geometry={nodes.taxi_COLOR_0.geometry} material={materials.COLOR} position={[-3912.17, -6.09, 1758.98]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[55.98, 55.98, 55.15]} />
        <mesh geometry={nodes.macchina_arancio_COLOR_0.geometry} material={materials.COLOR} position={[-3900.52, -5.85, 994.94]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={56.11} />
        <mesh geometry={nodes.macchina_viola_COLOR_0.geometry} material={materials.COLOR} position={[-3049.25, 51.12, -1249.7]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={70.01} />
        <mesh geometry={nodes.PULA001_COLOR_0.geometry} material={materials.COLOR} position={[-1621.56, 52.71, 37.1]} rotation={[-Math.PI / 2, 0, 0]} scale={55.1} />
        <mesh geometry={nodes.macchina_viola001_COLOR_0.geometry} material={materials.COLOR} position={[-5748.51, 43.44, 2706.92]} rotation={[-Math.PI / 2, 0, 0]} scale={62.45} />
        <mesh geometry={nodes.taxi001_COLOR_0.geometry} material={materials.COLOR} position={[-1405.35, -3.91, -1175.17]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={63.8} />
        <mesh geometry={nodes.macchina_arancio001_COLOR_0.geometry} material={materials.COLOR} position={[-1572.26, 5.23, 2237.26]} rotation={[-Math.PI / 2, 0, 0]} scale={[63.27, 52.9, 52.9]} />
        <mesh geometry={nodes.macchina_1001_COLOR_0.geometry} material={materials.COLOR} position={[-6154.3, 6.88, 123.08]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={60.73} />
        <mesh geometry={nodes.taxi005_Color002_0.geometry} material={materials['Color.002']} position={[-1409.79, -6.33, -1268.77]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[67.17, 67.17, 66.17]} />
        <mesh geometry={nodes.taxi006_Color002_0.geometry} material={materials['Color.002']} position={[-2086.95, 0.9, -1957.22]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[53.36, 53.36, 52.56]} />
        <mesh geometry={nodes.taxi002_COLOR_0.geometry} material={materials.COLOR} position={[-5015.49, -6.09, 5636.21]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[55.98, 55.98, 55.15]} />
        <mesh geometry={nodes.macchina_viola002_COLOR_0.geometry} material={materials.COLOR} position={[-234.68, 51.12, 5673.66]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={70.01} />
        <mesh geometry={nodes.macchina_1002_COLOR_0.geometry} material={materials.COLOR} position={[1018.59, -4.68, 3.7]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={60.73} />
        <mesh geometry={nodes.macchina_viola003_COLOR_0.geometry} material={materials.COLOR} position={[1412.34, 43.44, -1729.3]} rotation={[-Math.PI / 2, 0, 0]} scale={62.45} />
        <mesh geometry={nodes.macchina_1003_COLOR_0.geometry} material={materials.COLOR} position={[1008.35, -4.68, 4958.99]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={60.73} />
        <BusAnimation/>
        <mesh geometry={nodes.bus001_COLOR_0.geometry} material={materials.COLOR} position={[-3527.19, 285.06, 6013.28]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={80.14} />
        <mesh geometry={nodes.semaforo001_COLOR_0.geometry} material={materials.COLOR} position={[-2367.91, 264.11, -562.41]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.divieto_di_sosta001_UV_TEX_0.geometry} material={materials.UV_TEX} position={[-5256.06, 164.72, -559.63]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Parcheggio004_UV_TEX_0.geometry} material={materials.UV_TEX} position={[-3298.88, 363.58, 2707.24]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Precedenza001_UV_TEX_0.geometry} material={materials.UV_TEX} position={[-4253.91, 363.58, 2689.87]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.lampione026_COLOR_0.geometry} material={materials.COLOR} position={[-2971.05, 363.58, -564.01]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ventola001_COLOR_0.geometry} material={materials.COLOR} position={[257.75, 710.56, -95.91]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.stabilizzatore001_COLOR_0.geometry} material={materials.COLOR} position={[257.67, 673.6, -82.63]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.finestra009_COLOR_0.geometry} material={materials.COLOR} position={[606.05, 250.93, -187.57]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.finestra008_COLOR_0.geometry} material={materials.COLOR} position={[606.05, 250.93, -187.57]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.finestra002_COLOR_0.geometry} material={materials.COLOR} position={[606.05, 29.13, -187.57]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.finestra010_COLOR_0.geometry} material={materials.COLOR} position={[606.05, 29.13, -187.57]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.finestra011_COLOR_0.geometry} material={materials.COLOR} position={[606.05, 29.13, 111.21]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.finestra012_COLOR_0.geometry} material={materials.COLOR} position={[606.05, 250.93, 111.21]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.finestra013_COLOR_0.geometry} material={materials.COLOR} position={[606.05, 250.93, 111.21]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.finestra014_COLOR_0.geometry} material={materials.COLOR} position={[606.05, 29.13, 111.21]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Cylinder005_COLOR_0.geometry} material={materials.COLOR} position={[249.83, 641.02, -25.5]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Cube014_COLOR_0.geometry} material={materials.COLOR} position={[676.09, 121.3, 61.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube015_COLOR_0.geometry} material={materials.COLOR} position={[676.09, 121.3, 61.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube016_COLOR_0.geometry} material={materials.COLOR} position={[257.76, 690.36, -82.28]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.casa002_COLOR_0.geometry} material={materials.COLOR} position={[312.46, 345.28, 61.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.casa003_COLOR_0.geometry} material={materials.COLOR} position={[312.46, 123.48, 61.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.base001_COLOR_0.geometry} material={materials.COLOR} position={[370.2, 121.3, 61.51]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube020_COLOR_0.geometry} material={materials.COLOR} position={[141.63, 66.36, 1163.13]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.base005_COLOR_0.geometry} material={materials.COLOR} position={[-4890.91, 121.3, 1435.81]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Cube021_COLOR_0.geometry} material={materials.COLOR} position={[-4652.54, 858.32, 1465.59]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.base004_COLOR_0.geometry} material={materials.COLOR} position={[370.2, 121.3, 1026.54]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube022_COLOR_0.geometry} material={materials.COLOR} position={[-4234.64, -176.29, 4114.28]} rotation={[-Math.PI / 2, 0, 0]} scale={66.36} />
        <mesh geometry={nodes.Cube023_COLOR_0.geometry} material={materials.COLOR} position={[141.63, 66.36, 2079.71]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.base006_COLOR_0.geometry} material={materials.COLOR} position={[370.2, 121.3, 1943.13]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube024_COLOR_0.geometry} material={materials.COLOR} position={[141.63, 66.36, 2975.56]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.base007_COLOR_0.geometry} material={materials.COLOR} position={[370.2, 121.3, 2838.98]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.base008_COLOR_0.geometry} material={materials.COLOR} position={[-4885.94, 121.3, 49.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube025_COLOR_0.geometry} material={materials.COLOR} position={[-5137.4, 91.26, -167.41]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube026_COLOR_0.geometry} material={materials.COLOR} position={[-603.26, -5.64, 6447]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube027_COLOR_0.geometry} material={materials.COLOR} position={[-1779.45, -5.64, 6447]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube028_COLOR_0.geometry} material={materials.COLOR} position={[-3028.93, -5.64, 6447]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube029_COLOR_0.geometry} material={materials.COLOR} position={[-1038.09, -5.64, 2036.19]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Cube030_COLOR_0.geometry} material={materials.COLOR} position={[-6683.62, -5.64, 2348.4]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Cube031_COLOR_0.geometry} material={materials.COLOR} position={[-6683.62, -5.64, 364.25]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.base009_COLOR_0.geometry} material={materials.COLOR} position={[207.99, 121.3, 4121.97]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Cube033_COLOR_0.geometry} material={materials.COLOR} position={[-2328.73, 573.48, 4664.34]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere015_COLOR_0.geometry} material={materials.COLOR} position={[130.14, 48.68, -396.94]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere016_COLOR_0.geometry} material={materials.COLOR} position={[-2559.84, 58.85, 269.3]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere017_COLOR_0.geometry} material={materials.COLOR} position={[-2571.77, 58.85, -290.91]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube034_COLOR_0.geometry} material={materials.COLOR} position={[-2982.88, -5.64, -1763.77]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Cube035_COLOR_0.geometry} material={materials.COLOR} position={[-4016.06, -5.64, -1780.8]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Cube036_COLOR_0.geometry} material={materials.COLOR} position={[-5113.62, -5.64, -1758.37]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.Icosphere022_COLOR_0.geometry} material={materials.COLOR} position={[-1042.77, 48.84, 1981.32]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere023_COLOR_0.geometry} material={materials.COLOR} position={[-1033.21, 48.84, 2180.73]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere025_COLOR_0.geometry} material={materials.COLOR} position={[-319.38, 133.33, -1614.74]} rotation={[-2.88, 0, 0]} scale={45.16} />
        <mesh geometry={nodes.Icosphere027_COLOR_0.geometry} material={materials.COLOR} position={[-284.14, 133.33, -1942.25]} rotation={[-0.39, -0.83, 2.85]} scale={45.16} />
        <mesh geometry={nodes.Icosphere029_COLOR_0.geometry} material={materials.COLOR} position={[-330.57, 97.99, -2160.39]} rotation={[-2.76, 0.82, -0.29]} scale={45.16} />
        <mesh geometry={nodes.Icosphere031_COLOR_0.geometry} material={materials.COLOR} position={[-312.95, 133.33, -2359.31]} rotation={[-2.88, 0, 0]} scale={45.16} />
        <mesh geometry={nodes.Icosphere032_COLOR_0.geometry} material={materials.COLOR} position={[-2412.36, 97.99, -2228.77]} rotation={[-2.88, 0, 0]} scale={45.16} />
        <mesh geometry={nodes.Icosphere033_COLOR_0.geometry} material={materials.COLOR} position={[-3714.5, 97.99, -2228.77]} rotation={[-2.61, 1.04, -0.46]} scale={45.16} />
        <mesh geometry={nodes.Icosphere034_COLOR_0.geometry} material={materials.COLOR} position={[-5534.15, 97.99, -2228.77]} rotation={[-2.67, -0.97, 0.4]} scale={45.16} />
        <mesh geometry={nodes.Icosphere044_COLOR_0.geometry} material={materials.COLOR} position={[-4510.06, 136.12, 445.73]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere049_COLOR_0.geometry} material={materials.COLOR} position={[-2749.99, -103.52, -1921.7]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder007_COLOR_0.geometry} material={materials.COLOR} position={[-4866.25, 198.83, 633.76]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere051_COLOR_0.geometry} material={materials.COLOR} position={[192.8, 304.09, 521.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere052_COLOR_0.geometry} material={materials.COLOR} position={[256.55, 304.09, 3365.6]} rotation={[-Math.PI / 2, 0, 1.21]} scale={100} />
        <mesh geometry={nodes.Icosphere053_COLOR_0.geometry} material={materials.COLOR} position={[611.7, 304.09, 6550.04]} rotation={[-Math.PI / 2, 0, -3.01]} scale={100} />
        <mesh geometry={nodes.Icosphere054_COLOR_0.geometry} material={materials.COLOR} position={[825.39, 304.09, 6702.43]} rotation={[-Math.PI / 2, 0, 0.28]} scale={100} />
        <mesh geometry={nodes.Icosphere055_COLOR_0.geometry} material={materials.COLOR} position={[1230.31, 304.09, 6502.74]} rotation={[-Math.PI / 2, 0, 0.69]} scale={100} />
        <mesh geometry={nodes.Icosphere056_COLOR_0.geometry} material={materials.COLOR} position={[1244.66, 304.09, 6847.79]} rotation={[-1.56, 0.08, 1.08]} scale={100} />
        <mesh geometry={nodes.Icosphere057_COLOR_0.geometry} material={materials.COLOR} position={[1504.6, 258.21, 6819.84]} rotation={[-1.44, 0, 0.98]} scale={100} />
        <mesh geometry={nodes.Icosphere058_COLOR_0.geometry} material={materials.COLOR} position={[1680.2, 304.09, 6238.81]} rotation={[-Math.PI / 2, 0, -2.64]} scale={100} />
        <mesh geometry={nodes.Icosphere059_COLOR_0.geometry} material={materials.COLOR} position={[717.34, 304.09, 7108.77]} rotation={[-Math.PI / 2, 0, 2.68]} scale={100} />
        <mesh geometry={nodes.Icosphere060_COLOR_0.geometry} material={materials.COLOR} position={[-2390.76, 304.09, 6667.38]} rotation={[-Math.PI / 2, 0, 2.68]} scale={100} />
        <mesh geometry={nodes.Icosphere061_COLOR_0.geometry} material={materials.COLOR} position={[-1323.06, 304.09, 6778.14]} rotation={[-Math.PI / 2, 0, 2.68]} scale={100} />
        <mesh geometry={nodes.Icosphere062_COLOR_0.geometry} material={materials.COLOR} position={[-6256.63, 304.09, 6597.06]} rotation={[-Math.PI / 2, 0, 2.51]} scale={100} />
        <mesh geometry={nodes.Icosphere063_COLOR_0.geometry} material={materials.COLOR} position={[-4996.57, 304.09, 6591.63]} rotation={[-Math.PI / 2, 0, 0.83]} scale={100} />
        <mesh geometry={nodes.Icosphere064_COLOR_0.geometry} material={materials.COLOR} position={[-4145.27, 304.09, 6583.52]} rotation={[-Math.PI / 2, 0, 2.77]} scale={100} />
        <mesh geometry={nodes.Icosphere065_COLOR_0.geometry} material={materials.COLOR} position={[-5007.01, 304.09, 4214.73]} rotation={[-Math.PI / 2, 0, 2.68]} scale={100} />
        <mesh geometry={nodes.Icosphere066_COLOR_0.geometry} material={materials.COLOR} position={[-5138.87, 304.09, 4868.22]} rotation={[-Math.PI / 2, 0, 2.68]} scale={100} />
        <mesh geometry={nodes.Icosphere067_COLOR_0.geometry} material={materials.COLOR} position={[-6633.3, 529.92, 5154.26]} rotation={[-Math.PI / 2, 0, -3.03]} scale={174.26} />
        <mesh geometry={nodes.Icosphere068_COLOR_0.geometry} material={materials.COLOR} position={[-5783.25, 534.71, 5088.51]} rotation={[-Math.PI / 2, 0, 3.08]} scale={175.84} />
        <mesh geometry={nodes.Icosphere069_COLOR_0.geometry} material={materials.COLOR} position={[-5914.66, 304.09, 4077.05]} rotation={[-Math.PI / 2, 0, 1.93]} scale={100} />
        <mesh geometry={nodes.Icosphere070_COLOR_0.geometry} material={materials.COLOR} position={[-7268.84, 476.79, -1205.49]} rotation={[-Math.PI / 2, 0, -1.87]} scale={156.79} />
        <mesh geometry={nodes.Icosphere071_COLOR_0.geometry} material={materials.COLOR} position={[-783.94, 304.09, 3690.52]} rotation={[-Math.PI / 2, 0, 1.25]} scale={100} />
        <mesh geometry={nodes.Icosphere072_COLOR_0.geometry} material={materials.COLOR} position={[-955.54, 304.09, 3601.31]} rotation={[-Math.PI / 2, 0, -2.23]} scale={100} />
        <mesh geometry={nodes.Icosphere073_COLOR_0.geometry} material={materials.COLOR} position={[-597.59, 304.09, 3224.88]} rotation={[-Math.PI / 2, 0, 2.83]} scale={100} />
        <mesh geometry={nodes.Icosphere074_COLOR_0.geometry} material={materials.COLOR} position={[-5858.32, 490.29, -2016.58]} rotation={[-Math.PI / 2, 0, 2.16]} scale={161.23} />
        <mesh geometry={nodes.Icosphere075_COLOR_0.geometry} material={materials.COLOR} position={[-1348.23, 304.09, 3646.88]} rotation={[-Math.PI / 2, 0, 1.86]} scale={100} />
        <mesh geometry={nodes.Icosphere076_COLOR_0.geometry} material={materials.COLOR} position={[-1331.72, 304.09, 4200.08]} rotation={[-Math.PI / 2, 0, -2.92]} scale={100} />
        <mesh geometry={nodes.Icosphere077_COLOR_0.geometry} material={materials.COLOR} position={[-1834.53, 304.09, 3933.64]} rotation={[-Math.PI / 2, 0, -2.58]} scale={100} />
        <mesh geometry={nodes.Icosphere078_COLOR_0.geometry} material={materials.COLOR} position={[-2609.31, 168.85, -1695.99]} rotation={[-Math.PI / 2, 0, 0.92]} scale={100} />
        <mesh geometry={nodes.Icosphere079_COLOR_0.geometry} material={materials.COLOR} position={[-3610.62, 168.85, -1719.27]} rotation={[-Math.PI / 2, 0, -1.09]} scale={100} />
        <mesh geometry={nodes.Icosphere080_COLOR_0.geometry} material={materials.COLOR} position={[-4756.93, 168.85, -1672.8]} rotation={[-Math.PI / 2, 0, 0.89]} scale={100} />
        <mesh geometry={nodes.Icosphere081_COLOR_0.geometry} material={materials.COLOR} position={[-5533.18, 168.85, -1682.69]} rotation={[-Math.PI / 2, 0, -1.04]} scale={100} />
        <mesh geometry={nodes.Icosphere082_COLOR_0.geometry} material={materials.COLOR} position={[-6145.99, 168.85, -1690.74]} rotation={[-Math.PI / 2, 0, 1.18]} scale={100} />
        <mesh geometry={nodes.Icosphere083_COLOR_0.geometry} material={materials.COLOR} position={[-6347.11, 322.56, -2077.06]} rotation={[-Math.PI / 2, 0, -1.5]} scale={191.03} />
        <mesh geometry={nodes.Icosphere084_COLOR_0.geometry} material={materials.COLOR} position={[-6607.88, 297.67, -1755.73]} rotation={[-Math.PI / 2, 0, 1]} scale={176.29} />
        <mesh geometry={nodes.Icosphere085_COLOR_0.geometry} material={materials.COLOR} position={[-6818.71, 466.97, -1155.31]} rotation={[-Math.PI / 2, 0, -1.33]} scale={276.56} />
        <mesh geometry={nodes.Icosphere086_COLOR_0.geometry} material={materials.COLOR} position={[-6873.04, 246.68, -881.82]} rotation={[-Math.PI / 2, 0, -1.41]} scale={146.1} />
        <mesh geometry={nodes.Icosphere091_COLOR_0.geometry} material={materials.COLOR} position={[-6199.66, 332.67, 5233.87]} rotation={[-Math.PI / 2, 0, -1.03]} scale={197.02} />
        <mesh geometry={nodes.Icosphere093_COLOR_0.geometry} material={materials.COLOR} position={[-7056, 410.66, 5322.28]} rotation={[-Math.PI / 2, 0, -1.81]} scale={243.21} />
        <mesh geometry={nodes.Cylinder012_COLOR_0.geometry} material={materials.COLOR} position={[-1171.2, 198.83, -2331.94]} rotation={[-Math.PI / 2, 0, -1.27]} scale={100} />
        <mesh geometry={nodes.Cylinder013_COLOR_0.geometry} material={materials.COLOR} position={[-1166.62, 198.83, -1726.59]} rotation={[-Math.PI / 2, 0, 0.43]} scale={100} />
        <mesh geometry={nodes.Cylinder014_COLOR_0.geometry} material={materials.COLOR} position={[-236.98, 198.83, -363.15]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder015_COLOR_0.geometry} material={materials.COLOR} position={[-625.31, 198.83, -395.61]} rotation={[-Math.PI / 2, 0, -0.42]} scale={100} />
        <mesh geometry={nodes.Cylinder016_COLOR_0.geometry} material={materials.COLOR} position={[-378.82, 198.83, 223.6]} rotation={[-Math.PI / 2, 0, -0.4]} scale={100} />
        <mesh geometry={nodes.Cylinder017_COLOR_0.geometry} material={materials.COLOR} position={[-335.83, 424.27, 923.82]} rotation={[-Math.PI / 2, 0, -0.43]} scale={213.38} />
        <mesh geometry={nodes.Cylinder018_COLOR_0.geometry} material={materials.COLOR} position={[-354.18, 198.83, 1957.61]} rotation={[-Math.PI / 2, 0, 0.1]} scale={207.04} />
        <mesh geometry={nodes.Cylinder019_COLOR_0.geometry} material={materials.COLOR} position={[237.51, 223.73, 1504.76]} rotation={[-Math.PI / 2, 0, 0.52]} scale={100} />
        <mesh geometry={nodes.Icosphere036_COLOR_0.geometry} material={materials.COLOR} position={[284.71, 240.15, -2460.47]} rotation={[-Math.PI / 2, 0, -1.01]} scale={100} />
        <mesh geometry={nodes.Icosphere037_COLOR_0.geometry} material={materials.COLOR} position={[-135.01, 240.15, -2217.58]} rotation={[-Math.PI / 2, 0, 0.97]} scale={100} />
        <mesh geometry={nodes.Icosphere038_COLOR_0.geometry} material={materials.COLOR} position={[-4392.58, 168.85, -334.68]} rotation={[-Math.PI / 2, 0, 0.9]} scale={100} />
        <mesh geometry={nodes.Icosphere039_COLOR_0.geometry} material={materials.COLOR} position={[-1559.8, 304.09, 3391.63]} rotation={[-Math.PI / 2, 0, 2.83]} scale={100} />
        <mesh geometry={nodes.Icosphere040_COLOR_0.geometry} material={materials.COLOR} position={[-2310.44, 304.09, 3813.62]} rotation={[-Math.PI / 2, 0, 1.86]} scale={100} />
        <mesh geometry={nodes.Icosphere048_COLOR_0.geometry} material={materials.COLOR} position={[-2293.93, 304.09, 4366.82]} rotation={[-Math.PI / 2, 0, -2.92]} scale={100} />
        <mesh geometry={nodes.Icosphere050_COLOR_0.geometry} material={materials.COLOR} position={[-2796.74, 304.09, 4100.39]} rotation={[-Math.PI / 2, 0, -2.58]} scale={100} />
        <mesh geometry={nodes.Icosphere094_COLOR_0.geometry} material={materials.COLOR} position={[-4454.36, 4077.42, 775.69]} rotation={[-2.45, -0.7, -0.39]} scale={50.23} />
        <mesh geometry={nodes.Icosphere095_COLOR_0.geometry} material={materials.COLOR} position={[-2469.99, 3922.39, 3010.97]} rotation={[-1.45, -0.2, -0.17]} scale={25.59} />
        <mesh geometry={nodes.Icosphere096_COLOR_0.geometry} material={materials.COLOR} position={[-875.69, 4436.37, 4708.33]} rotation={[-1.27, -0.2, 0.48]} scale={50.77} />
        <mesh geometry={nodes.semaforo003_COLOR_0.geometry} material={materials.COLOR} position={[-2367.91, 264.11, -562.41]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.semaforo004_COLOR_0.geometry} material={materials.COLOR} position={[686.19, 264.11, -562.41]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder006_COLOR_0.geometry} material={materials.COLOR} position={[412.07, 751.72, 2163.97]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={150.82} />
        <mesh geometry={nodes.Cylinder009_COLOR_0.geometry} material={materials.COLOR} position={[-500.07, 785.04, 4852.7]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder011_COLOR_0.geometry} material={materials.COLOR} position={[511.39, 1012.34, 1030.88]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder020_COLOR_0.geometry} material={materials.COLOR} position={[-2794.51, 349.28, 1301.7]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube017_COLOR_0.geometry} material={materials.COLOR} position={[-6683.62, -5.64, 1485.08]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.tenda003_COLOR_0.geometry} material={materials.COLOR} position={[-3187.89, 268.16, 2361.67]} rotation={[-Math.PI / 2, 0, 0]} scale={183.88} />
        <mesh geometry={nodes.base002_COLOR_0.geometry} material={materials.COLOR} position={[-5060.66, -0.34, -1682.19]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder004_COLOR_0.geometry} material={materials.COLOR} position={[-344.87, 785.04, 4852.7]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder021_COLOR_0.geometry} material={materials.COLOR} position={[-177.37, 785.04, 4852.7]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.base003_COLOR_0.geometry} material={materials.COLOR} position={[-6606.86, -1.24, 2299.73]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.base010_COLOR_0.geometry} material={materials.COLOR} position={[-6606.86, -1.24, 1434.81]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.base011_COLOR_0.geometry} material={materials.COLOR} position={[-6606.86, -1.24, 313.73]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.base013_COLOR_0.geometry} material={materials.COLOR} position={[-3961.36, -0.34, -1682.19]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.base014_COLOR_0.geometry} material={materials.COLOR} position={[-2925.63, -0.34, -1682.19]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.base015_COLOR_0.geometry} material={materials.COLOR} position={[-1143.41, -0.06, 1077.28]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.base016_COLOR_0.geometry} material={materials.COLOR} position={[-1143.41, -0.06, 2081.12]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Cube011_COLOR_0.geometry} material={materials.COLOR} position={[-2328.73, 573.48, 4664.34]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={150.77} />
        <mesh geometry={nodes.Cube012_COLOR_0.geometry} material={materials.COLOR} position={[-4833.91, 4146.07, 1587.79]} rotation={[Math.PI, 0, Math.PI / 2]} scale={150.77} />
        <mesh geometry={nodes.base017_COLOR_0.geometry} material={materials.COLOR} position={[-786.12, -0.34, -1660.33]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.base018_COLOR_0.geometry} material={materials.COLOR} position={[254.68, -0.34, -1660.33]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.base019_COLOR_0.geometry} material={materials.COLOR} position={[-3073.31, -0.1, 6485.04]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.base020_COLOR_0.geometry} material={materials.COLOR} position={[-1825.31, -0.1, 6485.04]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.base021_COLOR_0.geometry} material={materials.COLOR} position={[-650.76, -0.1, 6485.04]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere018_COLOR_0.geometry} material={materials.COLOR} position={[-6557.04, 48.84, 2188.19]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere019_COLOR_0.geometry} material={materials.COLOR} position={[-6558.2, 48.84, 2387.6]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere020_COLOR_0.geometry} material={materials.COLOR} position={[-6557.04, 48.84, 1336.49]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere021_COLOR_0.geometry} material={materials.COLOR} position={[-6558.2, 48.84, 1535.89]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere024_COLOR_0.geometry} material={materials.COLOR} position={[-6557.04, 48.84, 215.77]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere026_COLOR_0.geometry} material={materials.COLOR} position={[-6558.2, 48.84, 415.18]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere097_COLOR_0.geometry} material={materials.COLOR} position={[-3200.37, 48.84, 6395.03]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere098_COLOR_0.geometry} material={materials.COLOR} position={[-2875.83, 48.84, 6395.03]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere099_COLOR_0.geometry} material={materials.COLOR} position={[-1957.56, 48.84, 6395.03]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere100_COLOR_0.geometry} material={materials.COLOR} position={[-1633.02, 48.84, 6395.03]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere028_COLOR_0.geometry} material={materials.COLOR} position={[-759.71, 48.84, 6395.03]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere030_COLOR_0.geometry} material={materials.COLOR} position={[-435.17, 48.84, 6395.03]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere101_COLOR_0.geometry} material={materials.COLOR} position={[-6974.53, 483.63, -2158.13]} rotation={[-Math.PI / 2, 0, 2.83]} scale={159.04} />
        <mesh geometry={nodes.Icosphere102_COLOR_0.geometry} material={materials.COLOR} position={[-6378.15, 485.91, -1045.09]} rotation={[-Math.PI / 2, 0, 3.08]} scale={159.79} />
        <mesh geometry={nodes.Icosphere103_COLOR_0.geometry} material={materials.COLOR} position={[-6104.27, 485.91, -1385.21]} rotation={[-Math.PI / 2, 0, 1.37]} scale={159.79} />
        <mesh geometry={nodes.Icosphere104_COLOR_0.geometry} material={materials.COLOR} position={[-6614.03, 466.97, -637.46]} rotation={[-Math.PI / 2, 0, -1.33]} scale={276.56} />
        <mesh geometry={nodes.Icosphere105_COLOR_0.geometry} material={materials.COLOR} position={[-5781, 466.97, -1535.47]} rotation={[-Math.PI / 2, 0, -1.33]} scale={276.56} />
        <mesh geometry={nodes.Icosphere106_COLOR_0.geometry} material={materials.COLOR} position={[-6656.78, 466.97, -251.44]} rotation={[-Math.PI / 2, 0, -2.35]} scale={276.56} />
        <mesh geometry={nodes.Icosphere107_COLOR_0.geometry} material={materials.COLOR} position={[-7053.77, 466.97, -1488.04]} rotation={[-Math.PI / 2, 0, -2.74]} scale={276.56} />
        <mesh geometry={nodes.Icosphere108_COLOR_0.geometry} material={materials.COLOR} position={[-6621.53, 466.97, -2119.2]} rotation={[-Math.PI / 2, 0, -0.24]} scale={276.56} />
        <mesh geometry={nodes.Icosphere109_COLOR_0.geometry} material={materials.COLOR} position={[-7111.24, 466.97, -2286.15]} rotation={[-Math.PI / 2, 0, -0.08]} scale={276.56} />
        <mesh geometry={nodes.Icosphere110_COLOR_0.geometry} material={materials.COLOR} position={[-6900.97, 476.79, -1760.82]} rotation={[-Math.PI / 2, 0, 2.36]} scale={156.79} />
        <mesh geometry={nodes.Icosphere111_COLOR_0.geometry} material={materials.COLOR} position={[-7323.09, 476.79, -1786.75]} rotation={[-Math.PI / 2, 0, -2.78]} scale={156.79} />
        <mesh geometry={nodes.Icosphere112_COLOR_0.geometry} material={materials.COLOR} position={[-7036.88, 476.79, -608.66]} rotation={[-Math.PI / 2, 0, 2.37]} scale={156.79} />
        <mesh geometry={nodes.Icosphere113_COLOR_0.geometry} material={materials.COLOR} position={[-6493.97, 168.85, -1469.22]} rotation={[-Math.PI / 2, 0, 2.06]} scale={100} />
        <mesh geometry={nodes.Icosphere114_COLOR_0.geometry} material={materials.COLOR} position={[-6082.5, 168.85, -2098.65]} rotation={[-Math.PI / 2, 0, -2.83]} scale={100} />
        <mesh geometry={nodes.Icosphere115_COLOR_0.geometry} material={materials.COLOR} position={[-6354.44, 490.29, -1666.14]} rotation={[-Math.PI / 2, 0, 0.39]} scale={161.23} />
        <mesh geometry={nodes.Icosphere116_COLOR_0.geometry} material={materials.COLOR} position={[-4511.21, 490.29, -1902.41]} rotation={[-Math.PI / 2, 0, 2.16]} scale={161.23} />
        <mesh geometry={nodes.Icosphere117_COLOR_0.geometry} material={materials.COLOR} position={[-4500.17, 466.97, -2253.21]} rotation={[-Math.PI / 2, 0, -0.08]} scale={276.56} />
        <mesh geometry={nodes.Cylinder008_COLOR_0.geometry} material={materials.COLOR} position={[-3465.2, 293.18, 235.53]} rotation={[-Math.PI / 2, 0, -0.82]} scale={147.45} />
        <mesh geometry={nodes.Cylinder022_COLOR_0.geometry} material={materials.COLOR} position={[-4091.31, 293.18, -26.43]} rotation={[-Math.PI / 2, 0, 0.83]} scale={147.45} />
        <mesh geometry={nodes.Cylinder023_COLOR_0.geometry} material={materials.COLOR} position={[-3449.77, 293.18, -393.25]} rotation={[-Math.PI / 2, 0, -2.75]} scale={147.45} />
        <mesh geometry={nodes.Icosphere118_COLOR_0.geometry} material={materials.COLOR} position={[-3288.47, 487.04, -2317.94]} rotation={[-Math.PI / 2, 0, -2.2]} scale={288.45} />
        <mesh geometry={nodes.Icosphere119_COLOR_0.geometry} material={materials.COLOR} position={[-5116.7, 490.29, -2322.62]} rotation={[-Math.PI / 2, 0, 2.16]} scale={161.23} />
        <mesh geometry={nodes.Icosphere120_COLOR_0.geometry} material={materials.COLOR} position={[-753.2, 490.29, -2312.33]} rotation={[-Math.PI / 2, 0, 0.92]} scale={161.23} />
        <mesh geometry={nodes.Icosphere121_COLOR_0.geometry} material={materials.COLOR} position={[-3870.53, 487.04, -2289.72]} rotation={[-Math.PI / 2, 0, -1.75]} scale={288.45} />
        <mesh geometry={nodes.Icosphere122_COLOR_0.geometry} material={materials.COLOR} position={[-3851.52, 487.04, -281.23]} rotation={[-Math.PI / 2, 0, 2.27]} scale={288.45} />
        <mesh geometry={nodes.Icosphere123_COLOR_0.geometry} material={materials.COLOR} position={[-3884.91, 487.04, 246.33]} rotation={[-Math.PI / 2, 0, -1.16]} scale={288.45} />
        <mesh geometry={nodes.Icosphere124_COLOR_0.geometry} material={materials.COLOR} position={[-3591.34, 466.97, 7.13]} rotation={[-Math.PI / 2, 0, -2.74]} scale={276.56} />
        <mesh geometry={nodes.Icosphere125_COLOR_0.geometry} material={materials.COLOR} position={[-7001.15, 476.79, 4078.38]} rotation={[-Math.PI / 2, 0, -2.3]} scale={156.79} />
        <mesh geometry={nodes.Icosphere126_COLOR_0.geometry} material={materials.COLOR} position={[-5379.71, 490.29, 3942.89]} rotation={[-Math.PI / 2, 0, 1.72]} scale={161.23} />
        <mesh geometry={nodes.Icosphere127_COLOR_0.geometry} material={materials.COLOR} position={[-7081.33, 466.97, 4314.92]} rotation={[-Math.PI / 2, 0, -1.77]} scale={276.56} />
        <mesh geometry={nodes.Icosphere128_COLOR_0.geometry} material={materials.COLOR} position={[-6330.22, 483.63, 3340.82]} rotation={[-Math.PI / 2, 0, 2.39]} scale={159.04} />
        <mesh geometry={nodes.Icosphere129_COLOR_0.geometry} material={materials.COLOR} position={[-6262.83, 485.91, 4798.02]} rotation={[-Math.PI / 2, 0, 2.64]} scale={159.79} />
        <mesh geometry={nodes.Icosphere130_COLOR_0.geometry} material={materials.COLOR} position={[-5870.46, 485.91, 4410.11]} rotation={[-Math.PI / 2, 0, 0.93]} scale={159.79} />
        <mesh geometry={nodes.Icosphere131_COLOR_0.geometry} material={materials.COLOR} position={[-6686.46, 466.97, 3913.87]} rotation={[-Math.PI / 2, 0, 3.11]} scale={276.56} />
        <mesh geometry={nodes.Icosphere132_COLOR_0.geometry} material={materials.COLOR} position={[-6027.14, 466.97, 3525.94]} rotation={[-Math.PI / 2, 0, -0.68]} scale={276.56} />
        <mesh geometry={nodes.Icosphere133_COLOR_0.geometry} material={materials.COLOR} position={[-6432.3, 476.79, 3731.78]} rotation={[-Math.PI / 2, 0, 1.93]} scale={156.79} />
        <mesh geometry={nodes.Icosphere134_COLOR_0.geometry} material={materials.COLOR} position={[-6803.48, 476.79, 3529.08]} rotation={[-Math.PI / 2, 0, 3.07]} scale={156.79} />
        <mesh geometry={nodes.Icosphere135_COLOR_0.geometry} material={materials.COLOR} position={[-7044.54, 476.79, 4717.23]} rotation={[-Math.PI / 2, 0, 1.93]} scale={156.79} />
        <mesh geometry={nodes.Icosphere136_COLOR_0.geometry} material={materials.COLOR} position={[-5977.68, 490.29, 4049.55]} rotation={[-Math.PI / 2, 0, -0.05]} scale={161.23} />
        <mesh geometry={nodes.Icosphere137_COLOR_0.geometry} material={materials.COLOR} position={[-5443.3, 490.29, 4301.2]} rotation={[-Math.PI / 2, 0, 1.72]} scale={161.23} />
        <mesh geometry={nodes.Icosphere092_COLOR_0.geometry} material={materials.COLOR} position={[-6649.8, 490.3, 4844.54]} rotation={[-Math.PI / 2, 0, 1.72]} scale={161.23} />
        <mesh geometry={nodes.Icosphere138_COLOR_0.geometry} material={materials.COLOR} position={[-7241.45, 490.29, 947.4]} rotation={[-Math.PI / 2, 0, -0.05]} scale={161.23} />
        <mesh geometry={nodes.Icosphere139_COLOR_0.geometry} material={materials.COLOR} position={[-6525.09, 466.97, 1864.66]} rotation={[-Math.PI / 2, 0, -0.68]} scale={276.56} />
        <mesh geometry={nodes.Icosphere140_COLOR_0.geometry} material={materials.COLOR} position={[-7137.15, 466.97, 2869.63]} rotation={[-Math.PI / 2, 0, -0.68]} scale={276.56} />
        <mesh geometry={nodes.Icosphere141_COLOR_0.geometry} material={materials.COLOR} position={[-6760.01, 304.09, 843.64]} rotation={[-Math.PI / 2, 0, 2.68]} scale={100} />
        <mesh geometry={nodes.Icosphere142_COLOR_0.geometry} material={materials.COLOR} position={[-6538.45, 304.09, 1009.8]} rotation={[-Math.PI / 2, 0, 2.68]} scale={100} />
        <mesh geometry={nodes.Icosphere143_COLOR_0.geometry} material={materials.COLOR} position={[-1113.32, 304.09, 2475.92]} rotation={[-Math.PI / 2, 0, 2.68]} scale={100} />
        <mesh geometry={nodes.Icosphere144_COLOR_0.geometry} material={materials.COLOR} position={[-1088.39, 304.09, 1405.69]} rotation={[-Math.PI / 2, 0, 1.25]} scale={100} />
        <mesh geometry={nodes.Icosphere145_COLOR_0.geometry} material={materials.COLOR} position={[-1155.49, 304.09, 748.1]} rotation={[-Math.PI / 2, 0, 2.83]} scale={100} />
        <mesh geometry={nodes.Icosphere146_COLOR_0.geometry} material={materials.COLOR} position={[-357.18, 466.97, 1297.76]} rotation={[-Math.PI / 2, 0, 1.47]} scale={276.56} />
        <mesh geometry={nodes.Icosphere147_COLOR_0.geometry} material={materials.COLOR} position={[-347.56, 466.97, 547.7]} rotation={[-Math.PI / 2, 0, -2.29]} scale={276.56} />
        <mesh geometry={nodes.Icosphere148_COLOR_0.geometry} material={materials.COLOR} position={[-374.05, 466.97, 2381.67]} rotation={[-Math.PI / 2, 0, 1.1]} scale={276.56} />
        <mesh geometry={nodes.Icosphere149_COLOR_0.geometry} material={materials.COLOR} position={[-347.07, 490.29, 2851.4]} rotation={[-Math.PI / 2, 0, 2.97]} scale={161.23} />
        <mesh geometry={nodes.Icosphere150_COLOR_0.geometry} material={materials.COLOR} position={[-325.59, 490.29, 3501.73]} rotation={[-Math.PI / 2, 0, 2.49]} scale={161.23} />
        <mesh geometry={nodes.Icosphere151_COLOR_0.geometry} material={materials.COLOR} position={[-4411.65, 297.67, -37.91]} rotation={[-Math.PI / 2, 0, 1]} scale={176.29} />
        <mesh geometry={nodes.Icosphere152_COLOR_0.geometry} material={materials.COLOR} position={[-4479.21, 476.79, 184.17]} rotation={[-Math.PI / 2, 0, -2.78]} scale={156.79} />
        <mesh geometry={nodes.Icosphere153_COLOR_0.geometry} material={materials.COLOR} position={[-990.44, 476.79, 202.24]} rotation={[-Math.PI / 2, 0, -2.78]} scale={156.79} />
        <mesh geometry={nodes.Cylinder024_COLOR_0.geometry} material={materials.COLOR} position={[-606.83, 293.18, -8.86]} rotation={[-Math.PI / 2, 0, -2.75]} scale={147.45} />
        <mesh geometry={nodes.Cylinder025_COLOR_0.geometry} material={materials.COLOR} position={[-971.86, 293.18, -266.85]} rotation={[-Math.PI / 2, 0, -2.75]} scale={147.45} />
        <mesh geometry={nodes.Icosphere154_COLOR_0.geometry} material={materials.COLOR} position={[-7214.58, 466.97, -750.19]} rotation={[-Math.PI / 2, 0, -1.33]} scale={276.56} />
        <mesh geometry={nodes.Icosphere155_COLOR_0.geometry} material={materials.COLOR} position={[-6577.14, 476.79, 6596.49]} rotation={[-Math.PI / 2, 0, 2.83]} scale={156.79} />
        <mesh geometry={nodes.Icosphere156_COLOR_0.geometry} material={materials.COLOR} position={[-6636.68, 466.97, 7045.47]} rotation={[-Math.PI / 2, 0, -2.92]} scale={276.56} />
        <mesh geometry={nodes.Icosphere157_COLOR_0.geometry} material={materials.COLOR} position={[-5630.83, 483.63, 6910.56]} rotation={[-Math.PI / 2, 0, 1.24]} scale={159.04} />
        <mesh geometry={nodes.Icosphere158_COLOR_0.geometry} material={materials.COLOR} position={[-6299.13, 466.97, 6817.4]} rotation={[-Math.PI / 2, 0, 1.96]} scale={276.56} />
        <mesh geometry={nodes.Icosphere159_COLOR_0.geometry} material={materials.COLOR} position={[-5500, 466.97, 6776.54]} rotation={[-Math.PI / 2, 0, -1.67]} scale={276.56} />
        <mesh geometry={nodes.Icosphere160_COLOR_0.geometry} material={materials.COLOR} position={[-6029.59, 476.79, 6975.84]} rotation={[-Math.PI / 2, 0, 0.77]} scale={156.79} />
        <mesh geometry={nodes.Icosphere161_COLOR_0.geometry} material={materials.COLOR} position={[-5994.88, 476.79, 6554.35]} rotation={[-Math.PI / 2, 0, 1.91]} scale={156.79} />
        <mesh geometry={nodes.Icosphere162_COLOR_0.geometry} material={materials.COLOR} position={[-7178.67, 476.79, 6815.98]} rotation={[-Math.PI / 2, 0, 0.77]} scale={156.79} />
        <mesh geometry={nodes.Icosphere163_COLOR_0.geometry} material={materials.COLOR} position={[-7033.47, 466.97, 6641.27]} rotation={[-Math.PI / 2, 0, -2.92]} scale={276.56} />
        <mesh geometry={nodes.Icosphere164_COLOR_0.geometry} material={materials.COLOR} position={[-4032.26, 476.79, 7018.46]} rotation={[-Math.PI / 2, 0, -0.28]} scale={156.79} />
        <mesh geometry={nodes.Icosphere165_COLOR_0.geometry} material={materials.COLOR} position={[-3986.41, 466.97, 6567.87]} rotation={[-Math.PI / 2, 0, 0.25]} scale={276.56} />
        <mesh geometry={nodes.Icosphere166_COLOR_0.geometry} material={materials.COLOR} position={[-4987.69, 483.63, 6733.34]} rotation={[-Math.PI / 2, 0, -1.87]} scale={159.04} />
        <mesh geometry={nodes.Icosphere167_COLOR_0.geometry} material={materials.COLOR} position={[-4316.86, 466.97, 6806.11]} rotation={[-Math.PI / 2, 0, -1.16]} scale={276.56} />
        <mesh geometry={nodes.Icosphere168_COLOR_0.geometry} material={materials.COLOR} position={[-5114.38, 466.97, 6871.27]} rotation={[-Math.PI / 2, 0, 1.5]} scale={276.56} />
        <mesh geometry={nodes.Icosphere169_COLOR_0.geometry} material={materials.COLOR} position={[-4591.1, 476.79, 6655.95]} rotation={[-Math.PI / 2, 0, -2.34]} scale={156.79} />
        <mesh geometry={nodes.Icosphere170_COLOR_0.geometry} material={materials.COLOR} position={[-4612.96, 476.79, 7078.3]} rotation={[-Math.PI / 2, 0, -1.2]} scale={156.79} />
        <mesh geometry={nodes.Icosphere171_COLOR_0.geometry} material={materials.COLOR} position={[-3437.68, 476.79, 6780.76]} rotation={[-Math.PI / 2, 0, -2.34]} scale={156.79} />
        <mesh geometry={nodes.Icosphere172_COLOR_0.geometry} material={materials.COLOR} position={[-3577.5, 466.97, 6959.81]} rotation={[-Math.PI / 2, 0, 0.25]} scale={276.56} />
        <mesh geometry={nodes.Icosphere173_COLOR_0.geometry} material={materials.COLOR} position={[1013.4, 476.79, 6895.18]} rotation={[-Math.PI / 2, 0, -0.28]} scale={156.79} />
        <mesh geometry={nodes.Icosphere174_COLOR_0.geometry} material={materials.COLOR} position={[1059.25, 466.97, 6444.59]} rotation={[-Math.PI / 2, 0, 0.25]} scale={276.56} />
        <mesh geometry={nodes.Icosphere175_COLOR_0.geometry} material={materials.COLOR} position={[57.97, 483.63, 6610.06]} rotation={[-Math.PI / 2, 0, -1.87]} scale={159.04} />
        <mesh geometry={nodes.Icosphere176_COLOR_0.geometry} material={materials.COLOR} position={[728.8, 466.97, 6682.84]} rotation={[-Math.PI / 2, 0, -1.16]} scale={276.56} />
        <mesh geometry={nodes.Icosphere177_COLOR_0.geometry} material={materials.COLOR} position={[-68.72, 466.97, 6748]} rotation={[-Math.PI / 2, 0, 1.5]} scale={276.56} />
        <mesh geometry={nodes.Icosphere178_COLOR_0.geometry} material={materials.COLOR} position={[454.56, 476.79, 6532.67]} rotation={[-Math.PI / 2, 0, -2.34]} scale={156.79} />
        <mesh geometry={nodes.Icosphere179_COLOR_0.geometry} material={materials.COLOR} position={[432.7, 476.79, 6955.02]} rotation={[-Math.PI / 2, 0, -1.2]} scale={156.79} />
        <mesh geometry={nodes.Icosphere180_COLOR_0.geometry} material={materials.COLOR} position={[1778.49, 304.09, 5305.44]} rotation={[-Math.PI / 2, 0, 2.63]} scale={100} />
        <mesh geometry={nodes.Icosphere181_COLOR_0.geometry} material={materials.COLOR} position={[1778.49, 304.09, 4680.38]} rotation={[-Math.PI / 2, 0, 3.02]} scale={100} />
        <mesh geometry={nodes.Icosphere182_COLOR_0.geometry} material={materials.COLOR} position={[1778.49, 304.09, 3919.1]} rotation={[-Math.PI / 2, 0, -2.19]} scale={100} />
        <mesh geometry={nodes.Icosphere183_COLOR_0.geometry} material={materials.COLOR} position={[1778.49, 304.09, 3069.67]} rotation={[-Math.PI / 2, 0, 2.31]} scale={100} />
        <mesh geometry={nodes.Icosphere184_COLOR_0.geometry} material={materials.COLOR} position={[1778.49, 304.09, 2284.34]} rotation={[-Math.PI / 2, 0, 1.18]} scale={100} />
        <mesh geometry={nodes.Icosphere185_COLOR_0.geometry} material={materials.COLOR} position={[1778.49, 304.09, 1418.88]} rotation={[-Math.PI / 2, 0, -1.09]} scale={100} />
        <mesh geometry={nodes.Icosphere186_COLOR_0.geometry} material={materials.COLOR} position={[1778.49, 304.09, 585.47]} rotation={[-Math.PI / 2, 0, 2.15]} scale={100} />
        <mesh geometry={nodes.Icosphere187_COLOR_0.geometry} material={materials.COLOR} position={[1778.49, 304.09, -271.97]} rotation={[-Math.PI / 2, 0, 1.26]} scale={100} />
        <mesh geometry={nodes.Icosphere188_COLOR_0.geometry} material={materials.COLOR} position={[1778.49, 304.09, -1113.39]} rotation={[-Math.PI / 2, 0, -1.99]} scale={100} />
        <mesh geometry={nodes.Icosphere189_COLOR_0.geometry} material={materials.COLOR} position={[1778.49, 304.09, -2034.95]} rotation={[-Math.PI / 2, 0, 1.55]} scale={100} />
        <mesh geometry={nodes.Icosphere190_COLOR_0.geometry} material={materials.COLOR} position={[1723.62, 476.79, 6461.04]} rotation={[-Math.PI / 2, 0, -0.28]} scale={156.79} />
        <mesh geometry={nodes.Icosphere191_COLOR_0.geometry} material={materials.COLOR} position={[1769.46, 466.97, 6010.45]} rotation={[-Math.PI / 2, 0, 0.25]} scale={276.56} />
        <mesh geometry={nodes.Icosphere192_COLOR_0.geometry} material={materials.COLOR} position={[1439.01, 466.97, 6248.7]} rotation={[-Math.PI / 2, 0, -1.16]} scale={276.56} />
        <mesh geometry={nodes.Icosphere035_COLOR_0.geometry} material={materials.COLOR} position={[-4032.26, 476.79, 7018.46]} rotation={[-Math.PI / 2, 0, -0.28]} scale={156.79} />
        <mesh geometry={nodes.Icosphere041_COLOR_0.geometry} material={materials.COLOR} position={[-3986.41, 466.97, 6567.87]} rotation={[-Math.PI / 2, 0, 0.25]} scale={276.56} />
        <mesh geometry={nodes.Icosphere047_COLOR_0.geometry} material={materials.COLOR} position={[-4316.86, 466.97, 6806.11]} rotation={[-Math.PI / 2, 0, -1.16]} scale={276.56} />
        <mesh geometry={nodes.Icosphere193_COLOR_0.geometry} material={materials.COLOR} position={[-4591.1, 476.79, 6655.95]} rotation={[-Math.PI / 2, 0, -2.34]} scale={156.79} />
        <mesh geometry={nodes.Icosphere194_COLOR_0.geometry} material={materials.COLOR} position={[-4612.96, 476.79, 7078.3]} rotation={[-Math.PI / 2, 0, -1.2]} scale={156.79} />
        <mesh geometry={nodes.Icosphere195_COLOR_0.geometry} material={materials.COLOR} position={[-3577.5, 466.97, 6959.81]} rotation={[-Math.PI / 2, 0, 0.25]} scale={276.56} />
        <mesh geometry={nodes.Icosphere196_COLOR_0.geometry} material={materials.COLOR} position={[-1097.13, 476.79, 4225.51]} rotation={[-Math.PI / 2, 0, -0.28]} scale={156.79} />
        <mesh geometry={nodes.Icosphere197_COLOR_0.geometry} material={materials.COLOR} position={[-1051.29, 466.97, 3774.93]} rotation={[-Math.PI / 2, 0, 0.25]} scale={276.56} />
        <mesh geometry={nodes.Icosphere198_COLOR_0.geometry} material={materials.COLOR} position={[-2052.56, 483.63, 3940.4]} rotation={[-Math.PI / 2, 0, -1.87]} scale={159.04} />
        <mesh geometry={nodes.Icosphere199_COLOR_0.geometry} material={materials.COLOR} position={[-1381.74, 466.97, 4013.17]} rotation={[-Math.PI / 2, 0, -1.16]} scale={276.56} />
        <mesh geometry={nodes.Icosphere200_COLOR_0.geometry} material={materials.COLOR} position={[-2179.26, 466.97, 4078.33]} rotation={[-Math.PI / 2, 0, 1.5]} scale={276.56} />
        <mesh geometry={nodes.Icosphere201_COLOR_0.geometry} material={materials.COLOR} position={[-1655.98, 476.79, 3863.01]} rotation={[-Math.PI / 2, 0, -2.34]} scale={156.79} />
        <mesh geometry={nodes.Icosphere202_COLOR_0.geometry} material={materials.COLOR} position={[-1677.84, 476.79, 4285.36]} rotation={[-Math.PI / 2, 0, -1.2]} scale={156.79} />
        <mesh geometry={nodes.Icosphere203_COLOR_0.geometry} material={materials.COLOR} position={[-502.56, 476.79, 3987.82]} rotation={[-Math.PI / 2, 0, -2.34]} scale={156.79} />
        <mesh geometry={nodes.Icosphere204_COLOR_0.geometry} material={materials.COLOR} position={[-642.37, 466.97, 4166.87]} rotation={[-Math.PI / 2, 0, 0.25]} scale={276.56} />
        <mesh geometry={nodes.Icosphere205_COLOR_0.geometry} material={materials.COLOR} position={[-1186.34, 476.79, 2920.53]} rotation={[-Math.PI / 2, 0, 2.83]} scale={156.79} />
        <mesh geometry={nodes.Icosphere206_COLOR_0.geometry} material={materials.COLOR} position={[-1245.88, 466.97, 3369.52]} rotation={[-Math.PI / 2, 0, -2.92]} scale={276.56} />
        <mesh geometry={nodes.Icosphere207_COLOR_0.geometry} material={materials.COLOR} position={[-908.33, 466.97, 3141.44]} rotation={[-Math.PI / 2, 0, 1.96]} scale={276.56} />
        <mesh geometry={nodes.Icosphere208_COLOR_0.geometry} material={materials.COLOR} position={[-604.08, 476.79, 2878.39]} rotation={[-Math.PI / 2, 0, 1.91]} scale={[156.79, 153, 156.79]} />
        <mesh geometry={nodes.Cube013_COLOR_0.geometry} material={materials.COLOR} position={[-2951.16, 53, -438.68]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube018_COLOR_0.geometry} material={materials.COLOR} position={[-3199.31, 45.8, -161.37]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube019_COLOR_0.geometry} material={materials.COLOR} position={[-2950.87, 53, -89.83]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube032_COLOR_0.geometry} material={materials.COLOR} position={[-3199.01, 45.8, 187.49]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube037_COLOR_0.geometry} material={materials.COLOR} position={[-55.94, 60.69, 3739.84]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube038_COLOR_0.geometry} material={materials.COLOR} position={[-43.67, 60.69, 4395.28]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cube039_COLOR_0.geometry} material={materials.COLOR} position={[251.86, 60.69, 3728.74]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Cylinder027_COLOR_0.geometry} material={materials.COLOR} position={[-4379.58, 1048.54, 269.5]} rotation={[-Math.PI / 2, 0, 0]} scale={261.21} />
        <mesh geometry={nodes.Cube040_COLOR_0.geometry} material={materials.COLOR} position={[-6416.78, 6.95, 4366.3]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.base022_COLOR_0.geometry} material={materials.COLOR} position={[-6296.99, 104.87, 4376.28]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Icosphere046_COLOR_0.geometry} material={materials.COLOR} position={[-907.97, 306.88, 2729.5]} rotation={[-Math.PI / 2, 0, 0.73]} scale={225.46} />
        <mesh geometry={nodes.Icosphere209_COLOR_0.geometry} material={materials.COLOR} position={[-711.45, 306.88, 3484.11]} rotation={[-Math.PI / 2, 0, -1.8]} scale={225.46} />
        <mesh geometry={nodes.Icosphere210_COLOR_0.geometry} material={materials.COLOR} position={[-1943.06, 306.88, 3637.7]} rotation={[-Math.PI / 2, 0, -1.2]} scale={225.46} />
        <mesh geometry={nodes.Icosphere211_COLOR_0.geometry} material={materials.COLOR} position={[-2731.07, 306.88, 3791.3]} rotation={[-Math.PI / 2, 0, -0.44]} scale={225.46} />
        <mesh geometry={nodes.Icosphere212_COLOR_0.geometry} material={materials.COLOR} position={[-3686.02, 306.88, 5180.32]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere213_COLOR_0.geometry} material={materials.COLOR} position={[-3665.99, 306.88, 4790.16]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere214_COLOR_0.geometry} material={materials.COLOR} position={[-4554.16, 306.88, 4813.03]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere215_COLOR_0.geometry} material={materials.COLOR} position={[-4560.84, 306.88, 5166.96]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere216_COLOR_0.geometry} material={materials.COLOR} position={[-7200.92, 306.88, 3919.75]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere217_COLOR_0.geometry} material={materials.COLOR} position={[-6783.75, 306.88, 3006.2]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere218_COLOR_0.geometry} material={materials.COLOR} position={[-7297.08, 306.88, 2179.2]} rotation={[-Math.PI / 2, 0, -0.81]} scale={225.46} />
        <mesh geometry={nodes.Icosphere219_COLOR_0.geometry} material={materials.COLOR} position={[-7254.95, 306.88, 1525.29]} rotation={[-Math.PI / 2, 0, -1.41]} scale={225.46} />
        <mesh geometry={nodes.Icosphere220_COLOR_0.geometry} material={materials.COLOR} position={[-485.06, 306.88, 7176.64]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere221_COLOR_0.geometry} material={materials.COLOR} position={[-738.75, 306.88, 7016.2]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere222_COLOR_0.geometry} material={materials.COLOR} position={[-1084.94, 306.88, 7128.56]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere223_COLOR_0.geometry} material={materials.COLOR} position={[-2354.3, 306.88, 7112.37]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere224_COLOR_0.geometry} material={materials.COLOR} position={[1332.42, 306.88, 7093.14]} rotation={[-Math.PI / 2, 0, -0.62]} scale={225.46} />
        <mesh geometry={nodes.Icosphere225_COLOR_0.geometry} material={materials.COLOR} position={[1697.84, 306.88, 5727.62]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere226_COLOR_0.geometry} material={materials.COLOR} position={[1765.15, 306.88, 4400.57]} rotation={[-Math.PI / 2, 0, -2.69]} scale={225.46} />
        <mesh geometry={nodes.Icosphere227_COLOR_0.geometry} material={materials.COLOR} position={[502.4, 306.88, -2251.27]} rotation={[-Math.PI / 2, 0, -1.3]} scale={225.46} />
        <mesh geometry={nodes.Icosphere229_COLOR_0.geometry} material={materials.COLOR} position={[-2704.67, 306.88, -2301.12]} rotation={[-Math.PI / 2, 0, -0.63]} scale={225.46} />
        <mesh geometry={nodes.Icosphere230_COLOR_0.geometry} material={materials.COLOR} position={[-5812.51, 306.88, -2238.64]} rotation={[-Math.PI / 2, 0, 0]} scale={225.46} />
        <mesh geometry={nodes.Icosphere231_COLOR_0.geometry} material={materials.COLOR} position={[-5060.43, 466.97, 2564.94]} rotation={[-Math.PI / 2, 0, -0.68]} scale={276.56} />
        <mesh geometry={nodes.Icosphere232_COLOR_0.geometry} material={materials.COLOR} position={[-4547.25, 306.88, 2573.51]} rotation={[-Math.PI / 2, 0, -0.44]} scale={225.46} />
        <mesh geometry={nodes.stop_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-1800, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.strisce_pedonali_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-1800, 0, 1000]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.curva_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-5959.11, 0, -843.89]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.fermata_autobus_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-4800, 0, -1000]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.strada_normale_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-1800, 0, 2000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.stop001_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-800, -13.25, -1000]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.stop002_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-2800, -13.25, -1000]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.stop003_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-1800, 0, -2000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.strada_normale003_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-3800, 0, -1000]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.strada_normale004_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-5959.11, 0, 156.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.strada_normale005_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-5959.11, 0, 1156.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.strada_normale006_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-5959.11, 0, 2156.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.curva001_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-5803, 0, 3315.22]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.strada_normale007_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-4803, 0, 3315.22]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.strada_normale008_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-3803, 0, 3315.22]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Parcheggio002_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-3803, 0, 2156.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.curva002_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-1800, 0, 3000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.strada_normale009_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-2803, 0, 3315.22]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.Parcheggio003_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-3803, 0, 1156.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.gelato_COLOR_0.geometry} material={materials.COLOR} position={[-4056.44, 85.34, 2546.71]} rotation={[-Math.PI / 2, 0, 0]} scale={70.02} />
        <mesh geometry={nodes.curva003_COLOR_0.geometry} material={materials.COLOR} position={[-5959.11, 0, -843.89]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.curva004_COLOR_0.geometry} material={materials.COLOR} position={[-5803, 0, 3315.22]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.curva005_COLOR_0.geometry} material={materials.COLOR} position={[-1800, 0, 3000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.strada_normale011_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[1200, 0, 1000]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.strada_normale012_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[1200, 0, 2000]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.strada_normale013_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[1200, 0, 2840.89]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.strada_normale014_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[1200, 0, 3840.89]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.strada_normale015_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[1200, 0, 4840.89]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.curva007_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[1200, 0, 5681.78]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.strada_normale016_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[40.89, 0, 5997]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.strada_normale017_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-959.11, 0, 5997]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.strada_normale018_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-1959.11, 0, 5997]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.strada_normale019_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-2959.11, 0, 5997]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.strada_normale020_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-3959.11, 0, 5997]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.strada_normale021_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-4959.11, 0, 5997]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.strada_normale022_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-5959.11, 0, 5997]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.curva008_COLOR_0.geometry} material={materials.COLOR} position={[-1800, 0, 3000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.curva009_COLOR_0.geometry} material={materials.COLOR} position={[-5803, 0, 3156.11]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.curva010_COLOR_0.geometry} material={materials.COLOR} position={[-5959.11, 0, -843.89]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.stop004_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[200, -13.25, -1000]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.strada_normale001_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[-6959.11, 0, 5997]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.curva006_COLOR_0.geometry} material={materials.COLOR} position={[1200, 0, 5681.78]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.curva011_COLOR_0.geometry} material={materials.COLOR} position={[1200, 0, 5681.78]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
        <mesh geometry={nodes.strada_normale024_COLOR_0.geometry} material={materials.COLOR} position={[-6959.11, 0, 5997]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
        <mesh geometry={nodes.gelato001_COLOR_0.geometry} material={materials.COLOR} position={[-2555.59, 85.34, 6060.83]} rotation={[-Math.PI / 2, 0, 0]} scale={70.02} />
        <mesh geometry={nodes.stop005_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[1200, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.stop006_segnali_orrizontali_0.geometry} material={materials.segnali_orrizontali} position={[1200, 0, -2000]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/citta.glb')
