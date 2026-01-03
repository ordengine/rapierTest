
// rapier chunks (inscribe w/ brotli to get under 400kb)
const chunkArray = [
    'http://localhost:8122/rapchunk1.js',
    'http://localhost:8122/rapchunk2.js'
]

// mime type
const type = 'text/javascript'

// fetch chunks and combine into blob


async function toDataBlob(chunkArray) {
    const chunksPromises = chunkArray.map(url => fetch(url).then(response => response.arrayBuffer()));
    const chunks = await Promise.all(chunksPromises);
    return new Blob(chunks, {type});
}

// get url for importing from blob data
async function toDataURL(chunkArray) {
    return URL.createObjectURL(await toDataBlob(chunkArray));
}

// dynamic import full module
const rapierModule = await import(await toDataURL(chunkArray))

export default rapierModule

// get and export all named exports
const AnyCollider = rapierModule.AnyCollider
const BallCollider = rapierModule.BallCollider
const CapsuleCollider = rapierModule.CapsuleCollider
const CoefficientCombineRule = rapierModule.CoefficientCombineRule
const ConeCollider = rapierModule.ConeCollider
const ConvexHullCollider = rapierModule.ConvexHullCollider
const CuboidCollider = rapierModule.CuboidCollider
const CylinderCollider = rapierModule.CylinderCollider
const HeightfieldCollider = rapierModule.HeightfieldCollider
const InstancedRigidBodies = rapierModule.InstancedRigidBodies
const MeshCollider = rapierModule.MeshCollider
const Physics = rapierModule.Physics
const RapierCollider = rapierModule.RapierCollider
const RapierRigidBody = rapierModule.RapierRigidBody
const RigidBody = rapierModule.RigidBody
const RoundConeCollider = rapierModule.RoundConeCollider
const RoundCuboidCollider = rapierModule.RoundCuboidCollider
const RoundCylinderCollider = rapierModule.RoundCylinderCollider
const TrimeshCollider = rapierModule.TrimeshCollider
const euler = rapierModule.euler
const interactionGroups = rapierModule.interactionGroups
const quat = rapierModule.quat
const useAfterPhysicsStep = rapierModule.useAfterPhysicsStep
const useBeforePhysicsStep = rapierModule.useBeforePhysicsStep
const useFixedJoint = rapierModule.useFixedJoint
const useImpulseJoint = rapierModule.useImpulseJoint
const usePrismaticJoint = rapierModule.usePrismaticJoint
const useRapier = rapierModule.useRapier
const useRevoluteJoint = rapierModule.useRevoluteJoint
const useRopeJoint = rapierModule.useRopeJoint
const useSphericalJoint = rapierModule.useSphericalJoint
const useSpringJoint = rapierModule.useSpringJoint
const vec3 = rapierModule.vec3

export {
    AnyCollider,
    BallCollider,
    CapsuleCollider,
    CoefficientCombineRule,
    ConeCollider,
    ConvexHullCollider,
    CuboidCollider,
    CylinderCollider,
    HeightfieldCollider,
    InstancedRigidBodies,
    MeshCollider,
    Physics,
    RapierCollider,
    RapierRigidBody,
    RigidBody,
    RoundConeCollider,
    RoundCuboidCollider,
    RoundCylinderCollider,
    TrimeshCollider,
    euler,
    interactionGroups,
    quat,
    useAfterPhysicsStep,
    useBeforePhysicsStep,
    useFixedJoint,
    useImpulseJoint,
    usePrismaticJoint,
    useRapier,
    useRevoluteJoint,
    useRopeJoint,
    useSphericalJoint,
    useSpringJoint,
    vec3
}
